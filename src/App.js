import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import UserContext from './contexts/UserContext';

function App() {
  const [isOnline, setIsOnline] = React.useState(false);
  return (
    <UserContext.Provider value={{ isOnline, setIsOnline }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
