import './User.css';
import Card from '../Card/Card.js';
import { useState } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';

let id = 4;

const User = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  let error = undefined;

  const onChangeUserName = (event) => {
    setUserName(event.target.value.trim());
  };

  const onChangeAge = (event) => {
    setAge(event.target.value.trim());
  };

  const addUser = (event) => {
    event.preventDefault();
    console.log('1');
    if (userName === '' || age === '') {
      console.log('21');
      error = {
        title: 'Invalid input',
        message: 'One or both field/fields is empty',
      };
      // props.errors(error);
    } else if (+age < 1) {
      error = {
        title: 'Invalid age',
        message: 'Age must be greater then 1',
      };
      // props.errors(error);
    } else {
      const newUser = {
        id,
        userName,
        age: +age,
      };
      error = undefined;
      console.log('3');
      props.addNewUser(newUser);
      id++;
    }

    props.errors(error);
    console.log('4');
    event.target.reset();
    setAge('');
    setUserName('');
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
