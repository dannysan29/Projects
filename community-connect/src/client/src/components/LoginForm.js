import React, { useState } from 'react';
import api from '../services/api';
import passwordValidator from 'password-validator';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);   

  const [error, setError] = useState(null);
  const   
[passwordStrength, setPasswordStrength] = useState('weak');

  const handleSubmit = async (e) => {
      e.preventDefault();

      // Client-side password validation
      if (!passwordSchema.validate(password)) {
          setError('Password must be at least 8 characters long and contain uppercase, lowercase letters, and numbers');
          return;   
// Prevent form submission if password is weak
      }

      setIsLoading(true);
      setError(null);

      try {
          const response = await api.post('/users/login', { email, password });
          const token = response.data.accessToken;
          localStorage.setItem('token', token);
          // Redirect to the protected route or update the application state
      } catch (error) {
          setError(error.response?.data?.message || 'An error occurred');
      } finally {
          setIsLoading(false);
      }
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);

      // Update password strength feedback
      if (passwordSchema.validate(e.target.value)) {
          setPasswordStrength('strong');
      } else {
          setPasswordStrength('weak');
      }
  }

  return (
      <form onSubmit={handleSubmit}>
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"  
              type="password"

              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
          />

          {passwordStrength === 'weak' && (
              <p style={{ color: 'red' }}>
                  Password must be at least 8 characters long and contain uppercase, lowercase letters, and numbers
              </p>
          )}

          {isLoading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit" disabled={isLoading}>Login</button>
      </form>
  );
};

export default LoginForm;