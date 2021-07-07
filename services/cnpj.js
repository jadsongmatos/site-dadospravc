import axios from 'axios';

export const searchCNPJ = (search) => {
  return axios.get(process.env.CNPJ_URL.replace('input', search));
};
