import logo from 'assets/logo.svg'
import { authenticate } from 'utils/authenticate'
import { useHistory } from 'react-router-dom';

const SplashScreen = () => {
  const history = useHistory();
  authenticate()
    .then((res) => localStorage.setItem('token', res.AuthorizationToken?.Token))
    .then(() => history.push('/home'))
    .catch((error) => console.log(error))

  return (
    <main>
      <img src={logo} alt="bsg" />
    </main>
  )
}

export default SplashScreen
