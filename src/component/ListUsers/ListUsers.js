import './ListUsers.css';
import Card from '../Card/Card';

const ListUsers = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ListUsers;
