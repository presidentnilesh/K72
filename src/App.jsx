import { Link , Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Agence from './assets/Pages/Agence'
import Project from './assets/Pages/Project'


const App = () => {

  return (
    <div className=''>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </div>
  )
}
export default App