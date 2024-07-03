// pages/register/Register.component.tsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import './Register.styles.scss';
import { registerService } from './Register.service';

const RegisterComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [touchedEmail, setTouchedEmail] = useState<boolean>(false);
  const [touchedPassword, setTouchedPassword] = useState<boolean>(false);
  const router = useRouter();
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Invalid email format');
      return false;
    }
  };

  const validatePassword = (password: string): boolean => {
    if (password.length < 8 || password.length > 100) {
      setPasswordError('Password must be between 8 and 100 characters long');
      return false;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,100}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must contain at least one letter and one number');
      return false;
    }

    setPasswordError('');
    return true;
  };

  useEffect(() => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  const handleEmailBlur = () => {
    setTouchedEmail(true);
    validateEmail(email);
  };

  const handlePasswordBlur = () => {
    setTouchedPassword(true);
    validatePassword(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    try {
      const request = {
        email: email,
        password: password
      }
      const response = await registerService(request);

      if (response.isError) {
        throw new Error('Registration failed');
      }
      router.push('/login');
    } catch (error) {
      setMessage('Registration failed');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (touchedEmail) validateEmail(e.target.value);
          }}
          onBlur={handleEmailBlur}
          required
        />
        {touchedEmail && emailError && <p className="error">{emailError}</p>}
      </div>
      <div className="field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (touchedPassword) validatePassword(e.target.value);
          }}
          onBlur={handlePasswordBlur}
          required
        />
        {touchedPassword && passwordError && <p className="error">{passwordError}</p>}
      </div>
      <button type="submit" disabled={!isFormValid}>Register</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default RegisterComponent;
