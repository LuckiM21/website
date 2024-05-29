import { Outlet } from 'react-router-dom';
import Footer from "../directories/Footer";
import NavBar from "../directories/NavBar";


const MainLayout = () => {


  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
