import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Property } from '../types';
import { PROPERTIES as FALLBACK_PROPERTIES } from '../data/Data';

/**
 * Real-time hook that subscribes to the Firestore `homestays` collection.
 * Admin Panel edits/additions/deletions in Firestore take single-source-of-truth precedence.
 */
export function useProperties() {
  const fixImage = (img: string) => {
    if (!img) return img;
    if (img.toLowerCase().includes('sukoonstay')) {
      return '/cover/sukoonstay.jpg';
    }
    return img;
  };

  const [properties, setProperties] = useState<Property[]>(() =>
    FALLBACK_PROPERTIES.map((p) => ({
      ...p,
      isActive: p.isActive !== undefined ? p.isActive : true,
      images: p.images ? p.images.map(fixImage) : p.images,
    }))
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      collection(db, 'homestays'),
      (snapshot) => {
        if (!snapshot.empty) {
          const firestoreDocs = snapshot.docs.map((docSnap) => {
            const item = docSnap.data() as Property;
            const fallback = FALLBACK_PROPERTIES.find((p) => p.id === docSnap.id || p.id === item.id);
            
            // Fix image URLs if needed
            const images = item.images ? item.images.map(fixImage) : (fallback?.images || []);

            // Merge fallback defaults first, then OVERWRITE with Firestore item data so Admin edits take effect
            const merged: Property = {
              ...(fallback || {}),
              ...item,
              id: item.id || docSnap.id,
              name: item.name || fallback?.name || docSnap.id,
              images: images && images.length ? images : (fallback?.images || []),
              isActive: item.isActive !== undefined ? item.isActive : (fallback?.isActive !== undefined ? fallback.isActive : true),
            };

            return merged;
          });

          // Show only active properties on the Main Website
          const activeProperties = firestoreDocs.filter((p) => p.isActive !== false);

          if (activeProperties.length > 0) {
            setProperties(activeProperties);
          } else {
            setProperties(firestoreDocs); // Fallback to all if none active
          }
        }
        setLoading(false);
      },
      (err) => {
        console.error('Firestore subscription error:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return { properties, loading, error };
}

