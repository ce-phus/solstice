import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Home, AboutPage, Service, Contact } from './pages'

const App = () => {
  return (
    <Router>
      <div className='bg-primary z-0 relative'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/AboutPage' element={<AboutPage />} exact />
          <Route path='/services' element={<Service />} exact />
          <Route path='/contact' element={<Contact />} exact />

        </Routes>
      </div>
    </Router>
    
  )
}

export default App