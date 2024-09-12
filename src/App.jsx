import React from 'react'
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import Contact from './Components/Contact/Contact'
import Villas from './Components/Villas/Villas'
import SingleVilla from './Components/Villas/SingleVilla'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/aboutus' element={<AboutUs/>}/>
          <Route path ='/contact' element={<Contact/>}/>
          <Route path ='/villas' element={<Villas/>}/>
          <Route path ='/villa/:id' element={<SingleVilla/>}/>

        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
