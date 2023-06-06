import './User.css';
import Card from '../Card/Card.js';
import { useState } from 'react';

let id = 4;

const User = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const onChangeUserName = (event) => {
    setUserName(event.target.value.trim());
  };

  const onChangeAge = (event) => {
    setAge(event.target.value.trim());
  };

  const addUser = (event) => {
    event.preventDefault();
    if (userName === '' || age === '') {
      alert('Form not valid please insert all fields');
      return;
    }

    const newUser = {
      id,
      userName,
      age,
    };
    id++;
    event.target.reset();
  };

  return (
    <Card>
      <form onSubmit={addUser}>
        <div>
          <h4>Username</h4>
          <input type='Text' onChange={onChangeUserName} />
        </div>
        <div>
          <h4>Age (Years)</h4>
          <input type='Text' onChange={onChangeAge} />
        </div>
        <button>Add user</button>
      </form>
    </Card>
  );
};

export default User;
