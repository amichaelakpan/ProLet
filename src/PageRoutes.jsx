import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './components/Home/Home'

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default PageRoutes
