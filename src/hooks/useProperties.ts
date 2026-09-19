import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Property } from '../types';
import { PROPERTIES as FALLBACK_PROPERTIES } from '../data/Data';

/**
 * Real-time hook that subscribes to the Firestore `homestays` collection.
 * Falls back to hardcoded data if Firebase is not configured or on error.
 */
export function useProperties() {
  const formatName = (name: string) => {
    if (!name) return name;
    return name.startsWith('The ') ? name : `The ${name}`;
  };

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
      name: formatName(p.name),
      images: p.images ? p.images.map(fixImage) : p.images,
    }))
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If Firebase is not configured, use fallback data
    if (!db) {
      setLoading(false);
      return;
    }

    const unsubscribe = onSnapshot(
      collection(db, 'homestays'),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const item = doc.data() as Property;
          const fallback = FALLBACK_PROPERTIES.find(
            (p) => p.id === doc.id || p.id.toLowerCase() === doc.id.toLowerCase()
          );
          const images = item.images ? item.images.map(fixImage) : item.images;
          return {
            ...item,
            ...(fallback ? fallback : {}),
            id: doc.id,
            name: formatName(fallback?.name || item.name || doc.id),
            images: images && images.length ? images : fallback?.images,
          };
        }) as Property[];

        // Only use Firestore data if we actually got results
        if (data.length > 0) {
          setProperties(data);
        }
        setLoading(false);
      },
      (err) => {
        console.error('Firestore subscription error:', err);
        setError(err.message);
        setLoading(false);
        // Keep using fallback data on error
      }
    );

    return () => unsubscribe();
  }, []);

  return { properties, loading, error };
}
