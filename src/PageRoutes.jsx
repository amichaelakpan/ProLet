import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import About from './components/About/About'
import Search from './components/Search/Search'
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
import DashLandlord1 from './components/DashLandlord1/DashLandlord1'
import AddProperty from './components/AddProperty/AddProperty'
import ActiveDashboard from './components/ActiveDashboard/ActiveDashboard'
import FundWallet from './components/FundWallet/FundWallet'
import CreditWalletWithCard from './components/CreditWalletWithCard/CreditWalletWithCard'
import PaymentSuccessful from './components/PaymentSuccessful/PaymentSuccessful'
import LandlordViewProperty from './components/LandlordViewProperty/LandlordViewProperty'
import PreviewLandlordAgreement from './components/PreviewLandlordAgreement/PreviewLandlordAgreement'
import MessageMe from './components/MessageMe/MessageMe'
import AdvancedLandlordSettings from './components/AdvancedLandlordSettings/AdvancedLandlordSettings'
import HelpLandlord from './components/HelpLandlord/HelpLandlord'
import ManageTenants from './components/ManageTenants/ManageTenants'

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        {/* Renters */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/renter-reg' element={<RenterReg />} />
        <Route
          path='/dashboard/comp-dash-renter'
          element={<CompDashRenter />}
        />
        {/* Agents  */}
        <Route path='/dashboard/agent-reg' element={<AgentReg />}></Route>
        {/* Landlords  */}
        <Route path='/dashboard/landlord-reg' element={<LandlordReg />}></Route>
        {/* Edit Post  */}
        <Route path='/dashboard/edit-post' element={<EditPost />}></Route>
        {/* Wallet  */}
        <Route path='/dashboard/wallet' element={<Wallet />}></Route>
        {/* Enter BVN  */}
        <Route path='/dashboard/enter-bvn' element={<EnterBVN />}></Route>
        {/* Verify Info  */}
        <Route path='/dashboard/verify-info' element={<VerifyInfo />}></Route>
        {/* Main Wallet  */}
        <Route path='/dashboard/main-wallet' element={<MainWallet />}></Route>
        {/* Transaction History */}
        <Route
          path='/dashboard/transation-history'
          element={<TransHistory />}
        ></Route>
        {/* Dashboard Landlord-1  */}
        <Route
          path='/dashboard/dash-landlord-1'
          element={<DashLandlord1 />}
        ></Route>
        {/* Add Property  */}
        <Route path='/dashboard/add-property' element={<AddProperty />}></Route>
        {/* Active Dashboard  */}
        <Route
          path='/dashboard/active-dashboard'
          element={<ActiveDashboard />}
        ></Route>
        {/* FundWallet */}
        <Route path='/dashboard/fund-wallet' element={<FundWallet />}></Route>
        {/* Credit Wallet With Card  */}
        <Route
          path='/dashboard/creditwallet-with-card'
          element={<CreditWalletWithCard />}
        ></Route>
        {/* Payment Successful */}
        <Route
          path='/dashboard/payment-successful'
          element={<PaymentSuccessful />}
        ></Route>
        {/* Landlord View Property  */}
        <Route
          path='/dashboard/landlord-view-property'
          element={<LandlordViewProperty />}
        ></Route>

        {/* Preview Agreement Landlord */}
        <Route
          path='/dashboard/preview-landlord-agreement'
          element={<PreviewLandlordAgreement />}
        ></Route>

        {/* Message Me  */}
        <Route path='/dashboard/messageme' element={<MessageMe />}></Route>

        {/* Advanced Landlord Settings */}
        <Route
          path='/dashboard/advanced-landlord-settings'
          element={<AdvancedLandlordSettings />}
        ></Route>

        {/* Help Landlord  */}
        <Route
          path='/dashboard/help-landlord'
          element={<HelpLandlord />}
        ></Route>
      </Routes>
      {/* Manage Tenants */}
      <Route
        path='/dashboard/manage-tenants'
        element={<ManageTenants />}
      ></Route>
    </Router>
  )
}

export default PageRoutes
