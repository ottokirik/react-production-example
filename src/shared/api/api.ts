import axios from 'axios'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/local-storage'

export const axiosInstance = axios.create({
  baseURL: _API_,
  headers: {
    authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  },
})
