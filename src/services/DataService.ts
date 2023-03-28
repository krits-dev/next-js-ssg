import { API_URL } from '@/constants/api.constants'

export const DataService = {
  Init: function () {
    // Any application initialization logic comes here
  },
  GetFixes: async function () {
    const response = await fetch(API_URL + '/fixes')
    const data = await response.json()
    return data
  },
}
