import { Outlet } from 'react-router-dom';
import NavBar from "../directories/NavBar";
import Bg from '../directories/Bg';
import Notice from '../directories/Notice';


const MainLayout = () => {


  return (
    <>
      <NavBar />
      <Notice />
      <Bg />
      <Outlet />

    </>
  )
}

export default MainLayout
