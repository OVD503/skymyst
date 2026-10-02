import { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { Review } from '../types';

export function useReviews(propertyId?: string) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!db) {
      setLoading(false);
      return;
    }

    let rootReviews: Review[] = [];
    let homestayDocReviews: Review[] = [];

    const updateCombined = () => {
      const combinedMap = new Map<string, Review>();
      homestayDocReviews.forEach((r) => combinedMap.set(r.id, r));
      rootReviews.forEach((r) => combinedMap.set(r.id, r));

      const docs = Array.from(combinedMap.values());
      docs.sort((a, b) => {
        const tA = a.createdAt?.seconds || 0;
        const tB = b.createdAt?.seconds || 0;
        return tB - tA;
      });

      setReviews(docs);
      setLoading(false);
    };

    // 1. Listen to homestay document reviewsList field
    let unsubHomestayDoc: (() => void) | null = null;
    if (propertyId) {
      unsubHomestayDoc = onSnapshot(
        doc(db, 'homestays', propertyId),
        (snap) => {
          if (snap.exists()) {
            const data = snap.data();
            if (Array.isArray(data.reviewsList)) {
              homestayDocReviews = data.reviewsList as Review[];
            }
          }
          updateCombined();
        },
        (err) => {
          console.warn('Homestay doc review listener error:', err);
          setLoading(false);
        }
      );
    } else {
      unsubHomestayDoc = onSnapshot(
        collection(db, 'homestays'),
        (snap) => {
          const extracted: Review[] = [];
          snap.docs.forEach((d) => {
            const data = d.data();
            if (Array.isArray(data.reviewsList)) {
              data.reviewsList.forEach((r: Review) => extracted.push(r));
            }
          });
          homestayDocReviews = extracted;
          updateCombined();
        },
        (err) => {
          console.warn('Homestays collection review listener error:', err);
          setLoading(false);
        }
      );
    }

    // 2. Root reviews collection
    const reviewsRef = collection(db, 'reviews');
    const q = propertyId
      ? query(reviewsRef, where('propertyId', '==', propertyId))
      : query(reviewsRef);

    const unsubRoot = onSnapshot(
      q,
      (snapshot) => {
        rootReviews = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
        })) as Review[];
        updateCombined();
      },
      (err) => {
        console.warn('Root reviews listener error:', err);
        setLoading(false);
      }
    );

    return () => {
      if (unsubHomestayDoc) unsubHomestayDoc();
      unsubRoot();
    };
  }, [propertyId]);

  return { reviews, loading, error };
}
