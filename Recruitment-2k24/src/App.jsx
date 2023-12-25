import './App.css'
import DomainSelction from './components/Pages/DomainSelection';
import Home from './components/Pages/Home'
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';


export default function App() {
  return (
    <>
      <Home/>
      <Register/>
      <Login/>
      <DomainSelction/>
    </>
  );
}
