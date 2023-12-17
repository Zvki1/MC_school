
import './App.css'
import Advertising from './components/Advertising'
import Courses from './components/Courses/Courses'
import Features from './components/Features/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials'

function App() {


  return (
    <>
    <div className='  bg-[#394264]'>
    <Navbar/>
    <Hero/>
    <Features/>
    <Courses/>
    <Advertising/>
    <Pricing/>
    <Testimonials/>
    </div>
   
    </>
  )
}

export default App
