import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  return (
    <>
      <div>
        <h1>{`User is ${isOnline ? 'en ligne' : 'hors ligne'}`}</h1>
      </div>

      <button
        onClick={() => {
          setIsOnline(!isOnline);
        }}
      >
        click to change user status
      </button>
    </>
  );
}

export default UserProfile;
