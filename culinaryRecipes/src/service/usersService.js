import axios from 'axios';
import {endpointUsers} from '../config/endpoint';

export const save = payload => {
  return axios.post(`${endpointUsers}.json`, payload);
};
