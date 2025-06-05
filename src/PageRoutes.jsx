import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import About from './components/About/About'
import Search from './components/Search/Search'
import Services from './components/Services/Services'

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default PageRoutes
