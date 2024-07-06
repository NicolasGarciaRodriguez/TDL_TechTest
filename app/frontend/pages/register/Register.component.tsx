// pages/register/Register.component.tsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import './Register.styles.scss';
import { RegisterService } from './Register.service';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IRegisterRequest } from '../../interfaces/IRegisterRequest.interface';
import Link from 'next/link';


interface IRegisterFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email('invalid email').required('Email is required'),
  password: yup.string()
  .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/, 'Password must contain between 8 and 10 characters long and at least one letter or number')
  .required('Password is required'),
});


const RegisterComponent: React.FC = () => {

  const router = useRouter();
  const [error, setError] = useState<string>('');
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IRegisterFormInputs>({
      mode: 'onChange',
      resolver: yupResolver(schema),
    });

    const onSubmit = async (data: IRegisterFormInputs) => {
      try {
        const response = await RegisterService(mapFormDataToRequest(data));
        if (!response.isError) {
          router.push('/login');
        }
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    }

    const mapFormDataToRequest = (data: IRegisterFormInputs): IRegisterRequest => {
      return {
          email: data.email,
          password: data.password
        };
    } 

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className='title'>Register</div>
      <div className="field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email')}
        />
          {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      {error && <p className="error-message">{error}</p>}
      <Link className='login-link' href="/login">Already registered? login here.</Link>
      <button type="submit" disabled={!isValid}>Register</button>
  </form>
  )
};

export default RegisterComponent;
