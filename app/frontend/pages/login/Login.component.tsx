import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import './Login.styles.scss';
import { LoginService } from './Login.service';
import { ILoginRequest } from '../../interfaces/ILoginRequest.interface';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

interface ILoginFormInputs {
    email: string;
    password: string;
}

const schema = yup.object().shape({
    email: yup.string().email('invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });


const LoginComponent = () => {

    const router = useRouter();
    const [error, setError] = useState<string>('');
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ILoginFormInputs>({
        mode: 'onChange',
        resolver: yupResolver(schema),
      });


    const onSubmit = async (data: ILoginFormInputs) => {

        try {
            const response = await LoginService(mapFormDataToRequest(data));
            if (!response.isError) {
              router.push('/home');
            }
        } catch (error) {
          setError(error.message);
          console.error(error);
        }
    };

    const mapFormDataToRequest = (data: ILoginFormInputs): ILoginRequest => {
        return {
            email: data.email,
            password: data.password
        };
    }
  
    return (
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
        <Link className='register-link' href="/register">Do not have an account? Sign up here.</Link>
        <button type="submit" disabled={!isValid}>Login</button>
      </form>
    );
}

export default LoginComponent