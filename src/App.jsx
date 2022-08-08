import React from 'react'
import Header from "./components/header/Header"
import Experiance from "./components/experiance/Experiance"
import About from "./components/about/About"
import Nav from "./components/nav/Nav"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Services from "./components/services/Services"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App