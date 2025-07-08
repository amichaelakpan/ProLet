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
import AdvancedRenterSettings from './components/AdvancedRenterSettings/AdvancedRenterSettings'
import HelpLandlord from './components/HelpLandlord/HelpLandlord'
import ManageTenants from './components/ManageTenants/ManageTenants'
import RequestRepair from './components/RequestRepair/RequestRepair'
import RequestRepairMessage from './components/RequestRepairMessage/RequestRepairMessage'
import TenantsChats from './components/TenantsChats/TenantsChats'
import ChatsLog from './components/ChatsLog/ChatsLog'
import GetAgreement from './components/GetAgreement/GetAgreement'
import ViewLandlordAgreement from './components/ViewLandlordAgreement/ViewLandlordAgreement'
import TerminateRent from './components/TerminateRent/TerminateRent'
import TerminateRentSuccessful from './components/TerminateRentSuccessful/TerminateRentSuccessful'
import PayRenterSuccessful from './components/PayRenterSuccessful/PayRenterSuccessful'
import ChangePasswordLandlord from './components/ChangePasswordLandlord/ChangePasswordLandlord'
import ChangePasswordLandlordSuccessful from './components/ChangePasswordLandlordSuccessful/ChangePasswordLandlordSuccessful'
import ManageAgents from './components/ManageAgents/ManageAgents'
import AgentAppointmentLetter from './components/AgentAppointmentLetter/AgentAppointmentLetter'
import FireAgent from './components/FireAgent/FireAgent'
import FireAgentLetter from './components/FireAgentLetter/FireAgentLetter'
import ReplaceAgent from './components/ReplaceAgent/ReplaceAgent'
import AppointAgentProperty from './components/AppointAgentProperty/AppointAgentProperty'
import Notification from './components/Notification/Notification'
import PersonalInfoRenterSettings from './components/PersonalInfoRenterSettings/PersonalInfoRenterSettings'
import ChangeRenterEmail from './components/ChangeRenterEmail/ChangeRenterEmail'
import LandlordNotification from './components/LandlordNotification/LandlordNotification'
import LandlordProfile from './components/LandlordProfile/LandlordProfile'
import ViewAgentAppointmentLetter from './components/ViewAgentAppointmentLetter/ViewAgentAppointmentLetter'
import MessageAgent from './components/MessageAgent/MessageAgent'
import AgentPropertyListing from './components/AgentPropertyListing/AgentPropertyListing'
import AgentOverview from './components/AgentOverview/AgentOverview'
import MessageAgentRenters from './components/MessageAgentRenters/MessageAgentRenters'
import MyApartment from './components/MyApartment/MyApartment'
import TerminationLease from './components/TerminationLease/TerminationLease'
import TerminationSentSuccessful from './components/TerminationSentSuccessful/TerminationRentSuccessful'
import RentPaymentSuccessful from './components/RentPaymentSuccessful/RentPaymentSuccessful'
import ChatTenantAgent from './components/ChatTenantAgent/ChatTenantAgent'
import ViewMessageAgent from './components/ViewMessageAgent/ViewMessageAgent'
import TenantRequestRepair from './components/TenantRequestRepair/TenantRequestRepair'
import RenterAgreementList from './components/RenterAgreementList/RenterAgreementList'
import SignAgreement from './components/SignAgreement/SignAgreement'
import TenantWallet from './components/TenantWallet/TenantWallet'
import RejectRenterAgreementSuccess from './components/RejectRenterAgreementSuccess/RejectRenterAgreementSuccess'
import NotificationRenter from './components/NotificationRenter/NotificationRenter'
import FavoriteRenterProperties from './components/FavoriteRenterProperties/FavoriteRenterProperties'
import DashboardRenter from './components/DashboardRenter/DashboardRenter'
import RenterPropertyPreview from './components/RenterPropertyPreview/RenterPropertyPreview'
import ResetRenterPassword from './components/ResetRenterPassword/ResetRenterPassword'
import ResetRenterPasswordSuccessful from './components/ResetRenterPasswordSuccessful/ResetRenterPasswordSuccessful'
import HelpRenter from './components/HelpRenter/HelpRenter'
import EnterRenterBVN from './components/EnterRenterBVN/EnterRenterBVN'
import VerifyRenterInfo from './components/VerifyRenterInfo/VerifyRenterInfo'
import RenterMainWallet from './components/RenterMainWallet/RenterMainWallet'
import RenterTransactionHistory from './components/RenterTransactionHistory/RenterTransactionHistory'
import FundRenterWallet from './components/FundRenterWallet/FundRenterWallet'
import FundRenterWalletWithCard from './components/FundRenterWalletWithCard/FundRenterWalletWithCard'
import RenterPaymentSuccessful from './components/RenterPaymentSuccessful/RenterPaymentSuccessful'
import ReportAgent from './components/ReportAgent/ReportAgent'

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
      {/* Request Repair */}
      <Route
        path='/dashboard/request-repair'
        element={<RequestRepair />}
      ></Route>
      {/* Request Repair Message */}
      <Route
        path='/dashboard/request-repair-message'
        element={<RequestRepairMessage />}
      ></Route>
      {/* Tenants Chats  */}
      <Route path='/dashboard/tenants-chats' element={<TenantsChats />}></Route>
      {/* Chats Log */}
      <Route path='/dashboard/chats-log' element={<ChatsLog />}></Route>
      {/* Get Agreement */}
      <Route path='/dashboard/get-agreement' element={<GetAgreement />}></Route>
      {/* View Landlord Agreement  */}
      <Route
        path='/dashboard/view-signed-agreement'
        element={<ViewLandlordAgreement />}
      ></Route>
      {/* Terminate Rent  */}
      <Route
        path='/dashboard/terminate-rent'
        element={<TerminateRent />}
      ></Route>
      {/* Terminate Rent Successful */}
      <Route
        path='/dashboard/terminate-rent-successful'
        element={<TerminateRentSuccessful />}
      ></Route>
      {/* Pay Renter Successful  */}
      <Route
        path='/dashboard/pay-renter-successful'
        element={<PayRenterSuccessful />}
      ></Route>
      {/* Change Password Landlord  */}
      <Route
        path='/dashboard/change-password-landlord'
        element={<ChangePasswordLandlord />}
      ></Route>
      {/* Change Password Landlord Successful  */}
      <Route
        path='/dashboard/change-password-landlord-successful'
        element={<ChangePasswordLandlordSuccessful />}
      ></Route>
      {/* Manage Agents  */}
      <Route path='/dashboard/manage-agents' element={<ManageAgents />}></Route>
      {/* Agent Appointment Letter */}
      <Route
        path='/dashboard/agent-appointment-letter'
        element={<AgentAppointmentLetter />}
      ></Route>

      {/* Fire Agent */}
      <Route path='/dashboard/fire-agent' element={<FireAgent />}></Route>

      {/* Fire Agent Letter*/}
      <Route
        path='/dashboard/fire-agent-letter'
        element={<FireAgentLetter />}
      ></Route>

      {/* Replace Agent*/}
      <Route path='/dashboard/replace-agent' element={<ReplaceAgent />}></Route>

      {/* Appoint Agent Property*/}
      <Route
        path='/dashboard/appoint-agent-property'
        element={<AppointAgentProperty />}
      ></Route>

      {/* Notifications */}
      <Route path='/dashboard/notification' element={<Notification />}></Route>

      {/* Advanced Renter Settings */}
      <Route
        path='/dashboard/advanced-renter-settings'
        element={<AdvancedRenterSettings />}
      ></Route>

      {/* Personal Info Renter Settings */}
      <Route
        path='/dashboard/renter-info-settings'
        element={<PersonalInfoRenterSettings />}
      ></Route>

      {/* Change Renter Email  */}
      <Route
        path='/dashboard/change-renter-email'
        element={<ChangeRenterEmail />}
      ></Route>

      {/* Landlord Notification  */}
      <Route
        path='/dashboard/landlord-notification'
        element={<LandlordNotification />}
      ></Route>

      {/* Landlord Profile  */}
      <Route
        path='/dashboard/landlord-profile'
        element={<LandlordProfile />}
      ></Route>

      {/* View Agent Appointment Letter  */}
      <Route
        path='/dashboard/view-agent-appointment-letter'
        alement={<ViewAgentAppointmentLetter />}
      ></Route>

      {/* Message Agent  */}
      <Route path='/dashboard/message-agent' element={<MessageAgent />}></Route>

      {/* Agent Listing  */}
      <Route
        path='/dashboard/agent-listing'
        element={<AgentPropertyListing />}
      ></Route>

      {/* Agent Overview  */}
      <Route
        path='/dashboard/agent-overview'
        element={<AgentOverview />}
      ></Route>

      {/* Message Agent Renters  */}
      <Route
        path='/dashboard/message-agent-renters'
        element={<MessageAgentRenters />}
      ></Route>

      {/* My Apartment  */}
      <Route path='/dashboard/my-apartment' element={<MyApartment />}></Route>

      {/* Termination Lease  */}
      <Route
        path='/dashboard/termination-lease'
        element={<TerminationLease />}
      ></Route>

      {/* Termination Successful  */}
      <Route
        path='/dashboard/termination-sent-successful'
        element={<TerminationSentSuccessful />}
      ></Route>

      {/* Rent Payment Successful  */}
      <Route
        path='/dashboard/rent-payment-successful'
        element={<RentPaymentSuccessful />}
      ></Route>

      {/* Chat Tenant Agent  */}
      <Route
        path='/dashboard/chat-tenant-agent'
        element={<ChatTenantAgent />}
      ></Route>

      {/* View Message Agent  */}
      <Route
        path='/dashboard/view-tenant-agent-message'
        element={<ViewMessageAgent />}
      ></Route>

      {/* Tenant Request Repair  */}
      <Route
        path='/dashboard/tenant-request-repair'
        element={<TenantRequestRepair />}
      ></Route>

      {/* Renter Agreement List  */}
      <Route
        path='/dashboard/renter-agreement-list'
        element={<RenterAgreementList />}
      ></Route>

      {/* Sign Agreement  */}
      <Route
        path='/dashboard/sign-agreement'
        element={<SignAgreement />}
      ></Route>

      {/* Tenant Wallet  */}
      <Route path='/dashboard/tenant-wallet' element={<TenantWallet />}></Route>

      {/* Reject Renter Agreement Successful  */}
      <Route
        path='/dashboard/reject-renter-agreement-successful'
        element={<RejectRenterAgreementSuccess />}
      ></Route>

      {/* Renter Notification Page  */}
      <Route
        path='/dashboard/renter-notification'
        element={<NotificationRenter />}
      ></Route>

      {/* Favorite Properties Renters  */}
      <Route
        path='/dashboard/favorite-renter-properties'
        element={<FavoriteRenterProperties />}
      ></Route>

      {/* Dashboard Renter  */}
      <Route
        path='/dashboard/dashboard-renter'
        element={<DashboardRenter />}
      ></Route>

      {/* Renter Property Preview  */}
      <Route
        path='/dashboard/renter-property-preview'
        element={<RenterPropertyPreview />}
      ></Route>

      {/* Reset Renter Password  */}
      <Route
        path='/dashboard/reset-renter-password'
        element={<ResetRenterPassword />}
      ></Route>

      {/* Reset Renter Password Successful  */}
      <Route
        path='/dashboard/reset-renter-password-successful'
        element={<ResetRenterPasswordSuccessful />}
      ></Route>

      {/* Help Renter  */}
      <Route path='/dashboard/help-renter' element={<HelpRenter />}></Route>

      {/* Enter Renter BVN  */}
      <Route
        path='/dashboard/enter-renter-bvn'
        element={<EnterRenterBVN />}
      ></Route>

      {/* Verify Renter Info  */}
      <Route
        path='/dashboard/verify-renter-info'
        element={<VerifyRenterInfo />}
      ></Route>

      {/* Renter Main Wallet  */}
      <Route
        path='/dashboard/renter-main-wallet'
        element={<RenterMainWallet />}
      ></Route>

      {/* Renter Transaction History  */}
      <Route
        path='/dashboard/renter-transaction-history'
        element={<RenterTransactionHistory />}
      ></Route>

      {/* Fund Renter Wallet  */}
      <Route
        path='/dashboard/fund-renter-wallet'
        element={<FundRenterWallet />}
      ></Route>

      {/* Fund Renter Wallet With Card  */}
      <Route
        path='/dashboard/fund-renter-wallet-with-card'
        element={<FundRenterWalletWithCard />}
      ></Route>

      {/* Renter Payment Successful  */}
      <Route
        path='/dashboard/renter-payment-successful'
        element={<RenterPaymentSuccessful />}
      ></Route>

      {/* Report Agent  */}
      <Route path='/dashboard/report-agent' element={<ReportAgent />}></Route>
    </Router>
  )
}

export default PageRoutes
