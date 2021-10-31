import logo from 'assets/logo.svg'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useEffect } from 'react'
import { authorize } from 'utils/authorize'

const SplashScreen = () => {
  const { push } = useHistory()

  const { mutate } = useMutation(authorize, {
    onError: (error) => {
      console.log(`error`, error)
    },
    onSuccess: ({ AuthorizationToken }) => {
      localStorage.setItem('token', AuthorizationToken.Token)
      push('/home')
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
