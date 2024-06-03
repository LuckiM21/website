
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
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
// import Bg from './Pages/Bg'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Notes" element={<NotesPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/WebProjects" element={<WebProjects />} />
      <Route path="/Css" element={<CssPage />} />
      <Route path="/Ai" element={<Ai />} />
      <Route path="/Architecture" element={<Architecture />} />
      <Route path="*" element={<Error />} />
    </Route>
  ));
const App = () => {
  return (<>
    <RouterProvider router={router} />
    {/* <Bg /> */}

  </>

  )
}

export default App

