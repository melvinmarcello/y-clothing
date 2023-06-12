import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Toaster = ({message}) => {

  

  return (
    <ToastContainer className="position-static">
      <Toast autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{message}</strong>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  );
}

export default Toaster;