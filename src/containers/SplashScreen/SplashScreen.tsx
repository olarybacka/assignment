import logo from 'assets/logo.svg'
import { authenticate } from 'utils/authenticate'

const SplashScreen = () => {
  authenticate()
    .then((res) => localStorage.setItem('token', res.AuthorizationToken?.Token))
    .catch((error) => console.log(error))

  return (
    <main>
      <img src={logo} alt="bsg" />
    </main>
  )
}

export default SplashScreen
