import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { Property } from '../types';
import { PROPERTIES as FALLBACK_PROPERTIES } from '../data/Data';

/**
 * Real-time hook that subscribes to the Firestore `homestays` collection.
 * Merges Firestore documents with local property data.
 */
export function useProperties() {
  const fixImage = (img: string) => {
    if (!img) return img;
    if (img.toLowerCase().includes('sukoonstay')) {
      return '/cover/sukoonstay.jpg';
    }
    return img;
  };

  const normalizeStr = (str: string) =>
    (str || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  const findFallback = (docId: string, itemDoc: Property): Property | undefined => {
    const cleanDocId = normalizeStr(docId);
    const cleanDocName = normalizeStr(itemDoc.name || '');

    return FALLBACK_PROPERTIES.find((p) => {
      const cleanPId = normalizeStr(p.id);
      const cleanPName = normalizeStr(p.name);

      if (p.id === docId || cleanPId === cleanDocId) return true;
      if (cleanDocId.includes(cleanPId) || cleanPId.includes(cleanDocId)) return true;
      if (cleanDocName && (cleanPName.includes(cleanDocName) || cleanDocName.includes(cleanPId))) return true;
      return false;
    });
  };

  const [properties, setProperties] = useState<Property[]>(() =>
    FALLBACK_PROPERTIES.map((p) => ({
      ...p,
      name: p.name,
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
        const firestoreDocs = snapshot.docs.map((doc) => {
          const item = doc.data() as Property;
          const fallback = findFallback(doc.id, item);
          const images = item.images ? item.images.map(fixImage) : item.images;

          return {
            ...item,
            ...(fallback ? fallback : {}),
            id: fallback?.id || doc.id,
            name: fallback?.name || item.name || doc.id,
            category: fallback?.category || item.category,
            isPremium: fallback?.isPremium !== undefined ? fallback.isPremium : item.isPremium,
            images: images && images.length ? images : fallback?.images,
            googleMapsUrl: fallback?.googleMapsUrl || item.googleMapsUrl,
            coordinates: fallback?.coordinates || item.coordinates,
            nearbyAttractions:
              fallback?.nearbyAttractions && fallback.nearbyAttractions.length > 0
                ? fallback.nearbyAttractions
                : item.nearbyAttractions,
            rooms:
              fallback?.rooms && fallback.rooms.length > 0
                ? fallback.rooms
                : item.rooms,
          };
        }) as Property[];

        // Combine Firestore docs with any local FALLBACK_PROPERTIES missing in Firestore
        const matchedFallbackIds = new Set(
          firestoreDocs.map((d) => normalizeStr(d.id))
        );

        const missingFallbacks = FALLBACK_PROPERTIES.filter(
          (fb) => !matchedFallbackIds.has(normalizeStr(fb.id))
        ).map((p) => ({
          ...p,
          name: p.name,
          images: p.images ? p.images.map(fixImage) : p.images,
        }));

        const mergedAll = [...firestoreDocs, ...missingFallbacks];

        // Filter out duplicate IDs if any
        const uniqueProperties: Property[] = [];
        const seenIds = new Set<string>();
        for (const prop of mergedAll) {
          const key = normalizeStr(prop.id);
          if (!seenIds.has(key)) {
            seenIds.add(key);
            uniqueProperties.push(prop);
          }
        }

        if (uniqueProperties.length > 0) {
          setProperties(uniqueProperties);
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
