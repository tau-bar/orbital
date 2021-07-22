import './App.css';
import HomePage from './pages/homepage/homepage.component';
import LoginPage from './pages/login-page/loginpage.component';
import Hamburger from './components/hamburger/hamburger.component';
import { Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/login-page/signuppage.component';
import NewVirusPage from './pages/new-virus-page/new-virus.component';


import VirusPage from './pages/virus-page/virus-page.component';
import BodyPage from './pages/body-page/body-page.component';
import MapPage from './pages/map-page/map-page.component';
import UserProvider from './context/UserProvider';
import HamburgerProvider from './context/HamburgerProvider';
import VirusModelPage from './pages/virus-model-page/virus-model';
import MapComponent from './components/map/map.component';
import ProfilePage from './pages/profile-page/profile-page';
import ForgotPassword from './pages/login-page/forgot-password';

function App() {
  return (
    <UserProvider>
    <HamburgerProvider>
    <div className="App">
    
    <Hamburger/>
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/login" component = {LoginPage}/>
        <Route exact path = "/sign-up" component = {SignUpPage}/>
        <Route path = "/virus/create" component = {NewVirusPage}></Route>
        <Route exact path = "/body" component = {BodyPage}></Route>
        <Route path = "/virus/model" component = {VirusModelPage} ></Route>
        <Route path = "/virus" component = {VirusPage} ></Route>
        <Route exact path = "/map" component = {MapPage} ></Route>
        <Route path = "/map" component = {MapComponent}></Route>
        <Route exact path = "/profile" component = {ProfilePage}></Route>
        <Route exact path = "/forgot-password" component = {ForgotPassword}></Route>

      </Switch>
    </div>
    </HamburgerProvider>
    </UserProvider>
  );
}

export default App;