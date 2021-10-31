import { Route, Redirect } from 'react-router-dom'

type RouteProps = {
  path: string
  exact: boolean
}

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const isAuthenticated = () => !!localStorage.getItem('token')
  return isAuthenticated() ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect
      to={{
        pathname: '/',
      }}
    />
  )
}
export default PrivateRoute
