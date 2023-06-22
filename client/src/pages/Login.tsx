/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosRequest } from '../utils/axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosRequest.post('/auth/login', {
        username,
        password,
      });
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      navigate('/');
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto py-16 mb-36'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-3xl font-bold text-[#404145] flex justify-center'>
          Sign In to Fiverr
        </h1>
        <div className='flex flex-col mb-3 '>
          <label htmlFor='' className='text-[#62646a] font-medium'>
            Username
          </label>
          <input
            name='username'
            type='text'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='border p-2 border-gray-300'
          />
        </div>
        <div className='flex flex-col mb-7 justify-center '>
          <label htmlFor='' className='text-[#62646a] font-medium'>
            Password
          </label>
          <input
            name='password'
            type='password'
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border p-2 border-gray-300 '
          />
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='bg-[#1dbf73] hover:bg-[#1aac68] py-2 px-16   rounded-md text-white  '
          >
            Login{' '}
          </button>
          {error && error}
        </div>
      </form>
    </div>
  );
};

export default Login;
