import 'firebase/database';
import { useFirestoreDoc, useUser, useFirestore } from 'reactfire';

export const fireData = (collection, document) => {
  const firestore = useFirestore();
  const collectionRef = firestore().collection(collection).doc(document);
  const docRef = useFirestoreDoc(collectionRef);
  
  return useFirestoreDoc(collectionRef);
};
