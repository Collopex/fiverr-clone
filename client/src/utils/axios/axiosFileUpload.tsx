/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const axiosFileUpload = async (file: any) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'fiverr-clone');

  try {
    const res = await axios.post(import.meta.env.VITE_CLODINARY_API, data);
    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default axiosFileUpload;
