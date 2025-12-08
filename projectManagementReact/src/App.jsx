
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home/Home'
// import NavbarI from './pages/Navbar/Navbar'
// import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
// import IssueDetails from './pages/IssueDetails/IssueDetails'
// import Subscription from './pages/Subscription/Subscription'
// import Auth from './pages/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './Redux/Auth/Action'
import { fetchProjects } from './Redux/Project/Action'
// import { Loader } from 'lucide-react'
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import ProjectDetails from './pages/project/ProjectDetails'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import Subscription from './pages/Subscription/Subscription'
import Auth from './pages/Auth/Auth'
import Loader from './pages/Loader/Loader'


function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store)

  useEffect(() => {
    dispatch(getUser())
    dispatch(fetchProjects({}))
  }, [auth.jwt])

  console.log(auth)

  return (
    <>
      {auth.user ? <Loader /> : auth.user ? (
        <div>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/project/:id' element={<ProjectDetails />}></Route>
            <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />}></Route>
            <Route path='/upgrade_plan' element={<Subscription />}></Route>
          </Routes>
        </div>) : (<Auth />)
      }
    </>
  )
}

export default App
