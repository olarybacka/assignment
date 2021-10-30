import { v4 as uuidv4 } from 'uuid'
import { fetchData } from 'utils/api'

export const authenticate = () =>
  fetchData('/Authorization/SignIn', {
    body: JSON.stringify({
      Device: {
        PlatformCode: 'WEB',
        Name: uuidv4(),
      },
    }),
    method: 'POST',
  })
