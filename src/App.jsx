import { useEffect } from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useLocation
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import NotesPage from './Pages/NotesPage'
import ProjectsPage from './Pages/ProjectsPage'
import WebProjects from './directories/ProjectsDirectory/InlinePages/WebProjects'
import Error from './Pages/Error'
import LoginPage from './Pages/LoginPage'
import CssPage from './directories/NotesDirectory/NotesCardPages/CssPage'
import Ai from './directories/NotesDirectory/NotesCardPages/Ai'
import Architecture from './directories/NotesDirectory/NotesCardPages/Architecture'
import Throwaways from './directories/NotesDirectory/NotesCardPages/Throwaways'
import ArtProjects from './directories/ProjectsDirectory/InlinePages/ArtProjects'
import Diagonal from './directories/NotesDirectory/NotesCardPages/Diagonal'
import Gradients from './directories/NotesDirectory/NotesCardPages/Gradients'
import CssBR from './directories/NotesDirectory/NotesCardPages/CssBR'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/website' element={<HomePage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Notes" element={<NotesPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/WebProjects" element={<WebProjects />} />
      <Route path='/ArtProjects' element={<ArtProjects />} />
      <Route path="/Css" element={<CssPage />} />
      <Route path="/Ai" element={<Ai />} />
      <Route path="/Architecture" element={<Architecture />} />
      <Route path="/Throwaways" element={<Throwaways />} />
      <Route path="/Diagonal" element={<Diagonal />} />
      <Route path="/Gradients" element={<Gradients />} />
      <Route path="/CssBR" element={<CssBR />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Pathname changed:", pathname);
  }, [pathname]);

  return null;

};

const App = () => {
  return (<>
    <RouterProvider router={router}>
      <ScrollToTop />
    </RouterProvider>
  </>

  );
};

export default App

