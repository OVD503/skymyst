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
  const [properties, setProperties] = useState<Property[]>(FALLBACK_PROPERTIES);
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
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Property[];

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
