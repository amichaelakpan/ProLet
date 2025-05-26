// import './App.css'
import './index.css'
import PageRoutes from './PageRoutes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import About from './components/About/About'

// function App() {
//   return (
//     <>
//       <Header />
//       <PageRoutes />
//       <Footer />
//     </>
//   )
// }

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
