import { useEffect, useState } from 'react';
import { getAuth, onIdTokenChanged } from 'firebase/auth';
import { getDoc, doc } from '@firebase/firestore';
import { db } from '../firebase';

const BusinessPage = () => {
  const [isBusinessUser, setIsBusinessUser] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onIdTokenChanged(auth, async (user) => {
      if (user) {
        try{
        const docRef = doc(db, 'customClaims', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()){
          const hasBusinessClaim = docSnap.data().isBusinessUser;
          setIsBusinessUser(hasBusinessClaim);
        }
      } catch (error){
        console.error('Error fetching custom claims:', error);
      }
    }
    });

    return () => unsubscribe();
  }, []);

  if (!isBusinessUser) {
    // If the user is not a business user, you can redirect them to another page or handle it accordingly.
    // For now, we'll render a message indicating they don't have access.
    return (
      <div>
        Sorry, you don't have access to this page.
      </div>
    );
  }

  return (
    <div>
      Business Page
    </div>
  );
};

export default BusinessPage;