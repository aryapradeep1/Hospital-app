import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegPatient from './components/RegPatient'
import SearchPatient from './components/SearchPatient'
import DeletePatient from './components/DeletePatient'
import ViewPatients from './components/ViewPatients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegPatient/>}/>
        <Route path='/search' element={<SearchPatient/>}/>
        <Route path='/delete' element={<DeletePatient/>}/>
        <Route path='/view' element={<ViewPatients/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
