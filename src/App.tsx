import './App.css'
import { Outlet } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
