import React from 'react';
import User from './component/User/User';
import ListUsers from './component/ListUsers/ListUsers';

const DUMMY_USERS = [
  {
    id: 1,
    userName: 'Ernad',
    age: 24,
  },
  {
    id: 2,
    userName: 'Semir',
    age: 25,
  },
  {
    id: 3,
    userName: 'Benjamin',
    age: 26,
  },
];

function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <User />
      <ListUsers users={DUMMY_USERS} />
    </div>
  );
}

export default App;
