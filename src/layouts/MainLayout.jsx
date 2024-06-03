import { Outlet } from 'react-router-dom';
import NavBar from "../directories/NavBar";
import Bg from '../directories/Bg';


const MainLayout = () => {


  return (
    <>
      <NavBar />
      <Bg />
      <Outlet />

    </>
  )
}

export default MainLayout
