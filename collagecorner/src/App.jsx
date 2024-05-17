import Testimonials from "./components/Testimonials/Testimonials"
import About from "./components/about/About"
import Campus from "./components/campus/Campus"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Programs from "./components/programs/Programs"
import Title from "./components/title/Title"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What we offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Say'/>
         <Testimonials/>
      <Title subTitle='Contact Us' title='Get In Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default App