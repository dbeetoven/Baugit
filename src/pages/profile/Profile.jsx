import React, { useState, useEffect } from 'react';
import { ProfileCard } from 'components/ProfileCard';
import { ProfileForm } from 'components/ProfileForm';
import Collections from 'constants/fireContant';
import 'firebase/firestore';
import { useFirebaseApp, useUser } from 'reactfire';

export const Profile = () => {
  const user = useUser();
  const [userProfile, setUserProfile] = useState({});
  const firestore = useFirebaseApp();

  useEffect(() => {
    firestore
      .firestore()
      .collection(Collections.USERS)
      .doc(user.uid)
      .onSnapshot((data) => {
        setUserProfile(data.data());
        console.log(data.data());
      });
  }, []);

  const editPerfil = (userData) => {
    firestore
      .firestore()
      .collection(Collections.USERS)
      .doc(user.uid)
      .set(userData)
      .then((res) => console.log(res));
  };
  return (
    <div className="row">
      <div className="col-lg-8 col-md-8 col-xs-12">
        <div className="card">
          <div className="card-body">
            <ProfileForm user={user} submit={editPerfil} />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-xs-12 col-sm-8">
        <ProfileCard user={user} userData={userProfile} />
      </div>
    </div>
  );
};
