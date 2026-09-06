import { Link , Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Agence from './assets/Pages/Agence'
import Project from './assets/Pages/Project'
import NavBar from './assets/Components/Navigation/NavBar'
import FullScreenNav from './assets/Components/Navigation/FullScreenNav'


const App = () => {

  return (
    <div>
      {/* <NavBar /> */}
      <FullScreenNav />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/project' element={<Project />} />
      </Routes> */}
    </div>
  )
}
export default App