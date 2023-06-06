import React, { useState } from 'react';
import User from './component/User/User';
import ListUsers from './component/ListUsers/ListUsers';
import ErrorModal from './component/ErrorModal/ErrorModal';

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
  const [users, setUsers] = useState(DUMMY_USERS);
  const [error, setError] = useState();

  const onNewUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  const onErrorHandler = (newError) => {
    setError(newError);
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          close={onErrorHandler}
        />
      )}
      <User addNewUser={onNewUserHandler} errors={onErrorHandler} />
      <ListUsers users={users} />
    </div>
  );
}

export default App;
