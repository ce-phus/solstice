import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Home, AboutPage, Contact, IT, Managed, Cyber, Cloud } from './pages'

const App = () => {
  return (
    <Router>
      <div className='bg-primary z-50 relative'>
        <Navbar />
      </div>
      <div className='bg-primary'>
      <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<AboutPage />} exact />
          <Route path='/contact' element={<Contact />} exact />
          <Route path='/cloud' element={<Cloud />} exact />
          <Route path='/cyber' element={<Cyber />} exact />
          <Route path='/it' element={<IT />} exact />
          <Route path='/managedITsolutions' element={<Managed />} exact />
        </Routes>
      </div>
    </Router>
        
    
  )
}

export default App