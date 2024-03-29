import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Gallery from './page/gallery/gallery';
import Home from './page/home/Home';
import Contact from './page/contact/contact';
import Footer from './component/footer/footer';
import Course from './page/course/course';

// import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/course' element={<Course/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
