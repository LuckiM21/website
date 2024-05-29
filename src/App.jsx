
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
import Error from './Pages/Error'
import WebProjects from './Pages/WebProjects'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/Projects" element={<ProjectsPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Notes" element={<NotesPage />} />
      <Route path="*" element={<Error />} />
    </Route>
  ));
const App = () => {
  return (<>
    <RouterProvider router={router} />
    {/* <WebProjects /> */}


  </>

  )
}

export default App

