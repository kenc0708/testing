import { useState } from 'react';
import Button from '@mui/material/Button';
import './changePW.css'

const ChangePW = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showNewPWFields, setShowNewPWFields] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'currentPassword') {
      setCurrentPassword(e.target.value);
    } else if (e.target.name === 'newPassword') {
      setNewPassword(e.target.value);
    } else if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
    }
  };

  const handleCurrentPasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/checkPW', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({ password: currentPassword }),
      });

      if (response.status === 400) {
        setError('Incorrect current password');
      } else if (response.status === 200) {
        setError('');
        setShowNewPWFields(true);
      } else {
        throw new Error('Unexpected response from server');
      }
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const handleNewPasswordSubmit = async (e) => {
    e.preventDefault();
  
    if (!newPassword || !confirmPassword) {
      setError('Please enter both new password and confirm password');
    } else if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match');
    } else {
      try {
        // Make API call to change password using fetch
        const response = await fetch('http://localhost:5000/api/users/me/password', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': `${localStorage.getItem('jwt') || sessionStorage.getItem('jwt')}`,
          },
          body: JSON.stringify({ password: newPassword }),
        });
  
        if (!response.ok) {
          // Handle non-JSON response
          throw new Error('Unexpected response from server');
        }
  
        // Handle success
        try {
          const data = await response.json();
          setSuccess(data.message);
        } catch (err) {
          if (err instanceof SyntaxError) {
            setSuccess('Password updated successfully');
          } else {
            throw err;
          }
        }
        setError('');
        setNewPassword('');
        setConfirmPassword('');
      } catch (err) {
        // Handle error
        setError(err.message);
        console.log(err); // Add this line to show error in console
      }
    }
  };
  
  
  
  return (
    <div className="PWContainer">
      <div className='ChangePW'>
        <h2 className='CPWTitle'>Change Password</h2>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        {!showNewPWFields && (
          <form onSubmit={handleCurrentPasswordSubmit} className='InputForm1'>
            <label className='TextLabel1'>
              Enter current password : 
              <input className='InputField1' type="password" name="currentPassword" value={currentPassword} onChange={handleChange} />
            </label>
            <Button 
            type="submit"
            color="success"
            variant="outlined"
            style={{
            width: '100%',
            marginTop: 5,
            padding: 5,
            marginBottom: 5,
            }}>
              Submit
            </Button>
          </form>
        )}
        {showNewPWFields && (
          <form onSubmit={handleNewPasswordSubmit} className='InputForm1'>
            <label className='TextLabel1'>
              Enter new password:
              <input className='InputField1' type="password" name="newPassword" value={newPassword} onChange={handleChange} />
            </label>
            <br></br>
            <label className='TextLabel1'>
              Confirm new password:
              <input className='InputField1' type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
            </label>
            <br></br>
            <Button 
            type="submit"
            color="success"
            variant="outlined"
            style={{
            width: '100%',
            marginTop: 5,
            padding: 5,
            marginBottom: 5,
            }}>
              Submit
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChangePW;