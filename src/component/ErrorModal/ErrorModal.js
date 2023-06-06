import Card from '../Card/Card';
import './ErrorModal.css';

const ErrorModal = (props) => {
  const closeModal = () => {
    props.close(undefined);
  };

  return (
    <Card className='modal'>
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      <div className='content'>
        <p>{props.message}</p>
      </div>
      <footer className='actions'>
        <button onClick={closeModal}>Okay</button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
