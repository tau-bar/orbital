import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage.component';
import LoginPage from './pages/login-page/loginpage.component';
import Hamburger from './components/hamburger/hamburger.component';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/login-page/signuppage.component';

function App() {
  return (
    <div className="App">
    <Hamburger/>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/login" component = {LoginPage}/>
        <Route exact path = "/sign-up" component = {SignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
