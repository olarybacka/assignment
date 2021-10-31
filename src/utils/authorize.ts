import { v4 as uuidv4 } from 'uuid'
import { fetchData } from 'utils/api'

export const authorize = () =>
  fetchData('/Authorization/SignIn', {
    Device: {
      PlatformCode: 'WEB',
      Name: uuidv4(),
    },
  })
