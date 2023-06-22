import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosFileUpload, axiosRequest } from '../utils/axios';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    country: '',
    isSeller: false,
    description: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const navigation = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const url = await axiosFileUpload(file);
    try {
      await axiosRequest.post('/auth/register', {
        ...user,
        img: url,
      });
      navigation('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSeller = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  return (
    <div>
      <div className='max-w-[1400px] mx-auto py-12'>
        <form className='flex justify-between gap-44' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-3 flex-1'>
            <h2 className='text-3xl font-bold text-[#404145] '>
              Create a new account
            </h2>
            <label htmlFor='' className='text-[#62646a] font-medium mt-2'>
              Username
            </label>
            <input
              name='username'
              type='text'
              placeholder='John Doe'
              className='border p-2 border-gray-300 '
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Email
            </label>
            <input
              name='email'
              type='email'
              placeholder='email@example.com'
              className='border p-2 border-gray-300'
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Password
            </label>
            <input
              name='password'
              type='password'
              placeholder=''
              className='border p-2 border-gray-300'
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Profile Picture
            </label>
            <input
              type='file'
              className='py-5 px-2 text-[#62646a] border  border-gray-300'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFile(e.target.files?.[0] || null)
              }
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Country
            </label>
            <input
              name='country'
              type='text'
              placeholder='USA'
              className='border p-2 border-gray-300 mb-5 '
              onChange={handleChange}
            />
            <button className='bg-[#1dbf73] hover:bg-[#1aac68] py-2 px-16 rounded-md text-white '>
              {loading ? 'Creating...' : 'Create'}
            </button>
          </div>

          <div className='flex flex-col gap-3  flex-1'>
            <h2 className='text-3xl font-bold text-[#404145] mb-7 '>
              I want to become a seller
            </h2>
            <div className='flex items-center gap-5 mb-4'>
              <label htmlFor='' className='text-[#62646a] font-medium'>
                Activate the seller account
              </label>
              <div>
                <label className='toggle'>
                  <input
                    type='checkbox'
                    placeholder='e.g One-page web design'
                    className=''
                    onChange={handleSeller}
                  />
                  <span className='slider round'></span>
                </label>
              </div>
            </div>

            <label htmlFor='' className='text-[#62646a] font-medium mt-2'>
              Phone Number
            </label>
            <input
              name='phone'
              type='tel'
              placeholder='+1 234 649 90'
              className='border p-2 border-gray-300 '
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Short Description
            </label>
            <textarea
              name='description'
              id=''
              cols={30}
              rows={7}
              className='border p-2 border-gray-300'
              placeholder='Short description of yourself'
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
