import './error.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Error = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  }

  const handleSignUp = () => {
    navigate('/register');
  }

  return (
    <div className='error'>
      <div className="EContainer">
        <p className='EText'>Please Login to have more function</p>
        <div className="errorBtn">
          <Button 
          onClick={handleLogin}
          color="success"
          variant="outlined"
          style={{
          width: '200px',
          height: '30px',
          marginLeft: 7,
          marginRight: 5,
          marginTop: 5,
          marginBottom: 5,
          padding: 5,
          }}>
            Login
          </Button>
          <Button 
          onClick={handleSignUp}
          color="success"
          variant="outlined"
          style={{
          width: '200px',
          height: '30px',
          marginLeft: 7,
          marginRight: 5,
          marginTop: 5,
          marginBottom: 5,
          padding: 5,
          }}>
            SignUp
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Error;