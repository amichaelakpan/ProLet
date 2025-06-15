// import './App.css'
import './index.css'
import PageRoutes from './PageRoutes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import About from './components/About/About'
import Services from './components/Services/Services'
import Dashboard from './components/Dashboard/Dashboard'
import RenterReg from './components/RenterReg/RenterReg'
import CompDashRenter from './components/CompDashRenter/CompDashRenter'
import AgentReg from './components/AgentReg/AgentReg'
import LandlordReg from './components/LandlordReg/LandlordReg'
import EditPost from './components/EditPost/EditPost'
import Wallet from './components/Wallet/Wallet'
import EnterBVN from './components/EnterBVN/EnterBVN'
import VerifyInfo from './components/VerifyInfo/VerifyInfo'
import MainWallet from './components/MainWallet/MainWallet'
import TransHistory from './components/TransHistory/TransHistory'

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />

          {/* Renters  */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/renter-reg' element={<RenterReg />} />
          <Route
            path='/dashboard/comp-dash-renter'
            element={<CompDashRenter />}
          />

          {/* Agents  */}
          <Route path='/dashboard/agent-reg' element={<AgentReg />}></Route>

          {/* Landlords  */}
          <Route
            path='/dashboard/landlord-reg'
            element={<LandlordReg />}
          ></Route>

          {/* Edit Post  */}
          <Route path='/dashboard/edit-post' element={<EditPost />}></Route>

          {/* Wallet  */}
          <Route path='/dashboard/wallet' element={<Wallet />}></Route>

          {/* EnterBVN  */}
          <Route path='/dashboard/enter-bvn' element={<EnterBVN />}></Route>

          {/* Verify Info  */}
          <Route path='/dashboard/verify-info' element={<VerifyInfo />}></Route>

          {/* MainWallet  */}
          <Route path='/dashboard/main-wallet' element={<MainWallet />}></Route>

          {/* Transaction History  */}
          <Route
            path='/dashboard/transaction-history'
            element={<TransHistory />}
          ></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App
