import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage.component';
import LoginPage from './pages/login-page/loginpage.component';
import Hamburger from './components/hamburger/hamburger.component';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/login-page/signuppage.component';
import NewVirusPage from './pages/new-virus-page/new-virus.component';
import VirusPage from './pages/virus-page/virus-page.component';

function App() {
  return (
    <div className="App">
    <Hamburger/>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/login" component = {LoginPage}/>
        <Route exact path = "/sign-up" component = {SignUpPage}/>
        <Route exact path = "/virus" component = {VirusPage} ></Route>
        <Route exact path = "/virus/create" component = {NewVirusPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
