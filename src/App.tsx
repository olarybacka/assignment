import './App.css'
import SplashScreen from 'containers/SplashScreen'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from 'containers/Home'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <SplashScreen />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </header>
    </div>
  )
}

export default App
