import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import LoginPage from './pages/login-page/loginpage.component';
import Hamburger from './components/hamburger/hamburger.component';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/login-page/signuppage.component';
import NewVirusPage from './pages/new-virus-page/new-virus.component';
import VirusPage from './pages/virus-page/virus-page.component';
import BodyPage from './pages/body-page/body-page.component';

function App() {
  return (
    <div className="App">
    <Hamburger/>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/login" component = {LoginPage}/>
        <Route exact path = "/sign-up" component = {SignUpPage}/>
        <Route exact path = "/virus/create" component = {NewVirusPage}></Route>
        <Route exact path = "/body" component = {BodyPage}></Route>
        <Route path = "/virus" component = {VirusPage} ></Route>
        
      </Switch>
    </div>
  );
}

export default App;
