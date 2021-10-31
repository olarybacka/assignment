import logo from 'assets/logo.svg'
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { v4 as uuidv4 } from 'uuid'
import { fetchData } from 'utils/api'
import { useEffect } from 'react';

const SplashScreen = () => {
  const { push } = useHistory();

  const { mutate, isLoading, isError } = useMutation(() => fetchData('/Authorization/SignIn', {
    body: JSON.stringify({
      Device: {
        PlatformCode: 'WEB',
        Name: uuidv4(),
      },
    })
  }), {
    onSuccess: ({ AuthorizationToken }) => {
      localStorage.setItem('token', AuthorizationToken.Token)
      push('/home')
    },
    onError: () => { 
      alert('there was an error')
    },
  })
  
  useEffect(() => {
    mutate()
  }, [mutate])

  return (
    <main>
      <img src={logo} alt="bsg" />
    </main>
  )
}

export default SplashScreen
