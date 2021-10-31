import './App.css'
import SplashScreen from 'components/SplashScreen'
import { Route, Switch } from 'react-router-dom'
import Home from 'components/Home'
import PrivateRoute from 'routes/PrivateRoute'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <SplashScreen />
          </Route>
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
        </Switch>
      </header>
    </div>
  )
}

export default App
