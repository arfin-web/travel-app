import './App.css'
import { Outlet } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Outlet />
    </>
  )
}

export default App
