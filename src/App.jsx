import React from 'react'
import Header from "./components/header/Header"
import Experiance from "./components/experiance/Experiance"
import About from "./components/about/About"
import Nav from "./components/nav/Nav"
import Achivements from "./components/achivements/achivements"
import Education from "./components/education/education"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Portfolio/>
    <Achivements/>
    <Education/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App