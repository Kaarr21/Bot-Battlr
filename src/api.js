import axios from 'axios';

const BASE_URL = 'http://localhost:8001/bots';

export const getBots = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const deleteBot = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};