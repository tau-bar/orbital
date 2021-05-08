import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage.component';
import LoginPage from './pages/loginpage.component';
import Hamburger from './components/hamburger/hamburger.component';

function App() {
  return (
    <div className="App">
    <Hamburger/>
    <HomePage/>  
    </div>
  );
}

export default App;
