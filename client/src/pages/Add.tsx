/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, FormEvent, useReducer, useState } from 'react';
import { gigReducer, INITIAL_STATE } from '../components/reducers/gigReducer';
import { axiosFileUpload, axiosRequest } from '../utils/axios';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [singleFile, setSingleFile] = useState<File | null>(null);
  const [files, setFiles] = useState<any>(['']);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigate();
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e: any) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_FEATURE',
      payload: e.target[0].value,
    });
  };

  const handleUpload = async () => {
    setLoading(true);
    try {
      const cover = await axiosFileUpload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await axiosFileUpload(file);
          return url;
        })
      );
      setLoading(false);
      dispatch({
        type: 'ADD_IMAGES',
        payload: { coverImg: cover, images },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return axiosRequest.post('/gigs', gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myGigs']);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate(state);
    navigation('/myGigs');
  };

  return (
    <div>
      <div className='max-w-[1400px] mx-auto py-12'>
        <h1 className='text-3xl font-bold text-[#404145] mb-7 '>Add New Gig</h1>
        <div className='flex justify-between gap-44'>
          <div className='flex flex-col  justify-between flex-1'>
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Title
            </label>
            <input
              type='text'
              name='title'
              placeholder="e.g I will do something I'm really good at"
              className='border p-2 border-gray-300 '
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Category
            </label>
            <select
              name='category'
              id='category'
              className='border p-2 border-gray-300'
              onChange={handleChange}
            >
              <option value='design'>Design</option>
              <option value='web'>Web Development</option>
              <option value='animation'>Animation</option>
              <option value='music'>Music</option>
            </select>
            <div className='flex  items-center'>
              <div className='flex flex-col gap-3'>
                <label htmlFor='' className='text-[#62646a] font-medium'>
                  Cover Image
                </label>
                <input
                  type='file'
                  className='py-2 text-[#62646a]'
                  onChange={(e) => setSingleFile(e.target.files?.[0] || null)}
                />
                <label htmlFor='' className='text-[#62646a] font-medium'>
                  Upload Images
                </label>
                <input
                  type='file'
                  multiple
                  className='py-2 text-[#62646a]'
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button
                onClick={handleUpload}
                className='bg-[#1dbf73] hover:bg-[#1aac68] px-4 py-2 rounded-md text-white'
              >
                {loading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
            <label className='text-[#62646a] font-medium'>Description</label>
            <textarea
              name='description'
              id=''
              placeholder='Brief descriptions to introduce your service to customers'
              cols={30}
              rows={7}
              className='border p-2 border-gray-300'
              onChange={handleChange}
            />
            <button
              className='bg-[#1dbf73] hover:bg-[#1aac68] py-2 px-16 rounded-md text-white '
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
          <div className='flex flex-col gap-3 justify-between flex-1'>
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Service Title
            </label>
            <input
              type='text'
              name='shortTitle'
              placeholder='e.g One-page web design'
              className='border p-2 border-gray-300'
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Short Description
            </label>
            <textarea
              name='shortDescription'
              id=''
              cols={30}
              rows={7}
              className='border p-2 border-gray-300'
              placeholder='Short Description of your service'
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Delivery Time (e.g 3 days)
            </label>
            <input
              type='number'
              name='deliveryTime'
              min={1}
              className='border p-2 border-gray-300'
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Revision Number
            </label>
            <input
              type='number'
              name='revisionNumber'
              min={1}
              className='border p-2 border-gray-300'
              onChange={handleChange}
            />
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Add Features
            </label>
            <form onSubmit={handleFeature} className='flex'>
              <input
                type='text'
                name='feature'
                placeholder='e.g page design'
                className='border p-2 border-gray-300 flex-1'
              />
              <button
                type='submit'
                className='bg-[#1dbf73] hover:bg-[#1aac68]  text-white px-4'
              >
                Add
              </button>
            </form>
            <div className='flex gap-5 items-center flex-col'>
              {state?.features?.map((ft: typeof state) => (
                <div className='border p-2 border-gray-300' key={uuidv4()}>
                  <button
                    className=''
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FEATURE', payload: ft })
                    }
                  >
                    <div className='flex gap-10 items-center px-2 uppercase '>
                      <span>{ft}</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor='' className='text-[#62646a] font-medium'>
              Price
            </label>
            <input
              type='number'
              name='price'
              min={1}
              className='border p-2 border-gray-300'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
