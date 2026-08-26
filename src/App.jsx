import React from 'react'
import { Link , Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Agence from './assets/Pages/Agence'
import Project from './assets/Pages/Project'

const App = () => {
  return (
    <div className='text-white'>
      
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Agence' element={<Agence />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </div>
  )
}

export default App