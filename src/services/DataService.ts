import axios from 'axios'
import { API_URL } from '@/constants/api.constants'

export const DataService = {
  Init: function () {
    // Any application initialization logic comes here
  },
  GetFixes: async function () {
    const response = await axios.get(API_URL + '/fixes', {
      withCredentials: false,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    })
    return response.data
  },
}
