import './App.css';
import HomePage from './pages/homepage/homepage.component';
import LoginPage from './pages/login-page/loginpage.component';
import Hamburger from './components/hamburger/hamburger.component';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/login-page/signuppage.component';
import NewVirusPage from './pages/new-virus-page/new-virus.component';



import VirusPage from './pages/virus-page/virus-page.component';
import EbolaPage from './pages/virus-page/ebolavirus.component';
import OrthopoxPage from './pages/virus-page/orthopoxvirus.component';
import YerseniaPage from './pages/virus-page/yersenia.component';
import MobilliPage from './pages/virus-page/mobillivirus.component';
import FlavPage from './pages/virus-page/flavivirus.component';


import BodyPage from './pages/body-page/body-page.component';
import MapPage from './pages/map-page/map-page.component';
import {UserProvider} from './context/UserContext';

function App() {
  return (
    <UserProvider>
    <div className="App">
    
    <Hamburger/>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/login" component = {LoginPage}/>
        <Route exact path = "/sign-up" component = {SignUpPage}/>
        <Route exact path = "/virus/create" component = {NewVirusPage}></Route>
        <Route exact path = "/body" component = {BodyPage}></Route>
        <Route path = "/virus/coronavirus" component = {VirusPage} ></Route>
        <Route path = "/virus/flavivirus" component = {FlavPage} ></Route>
        <Route path = "/virus/mobillivirus" component = {MobilliPage} ></Route>
        <Route path = "/virus/yersenia" component = {YerseniaPage} ></Route>
        <Route path = "/virus/ebolavirus" component = {EbolaPage} ></Route>
        <Route path = "/virus/orthopoxvirus" component = {OrthopoxPage} ></Route>
 
        <Route path = "/map" component = {MapPage} ></Route>
      </Switch>
    </div>
    </UserProvider>
  );
}

export default App;
