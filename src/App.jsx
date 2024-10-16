
import './App.css'
import IPOAboutPage from './pages/About'
import HowToApplyForIPO from './pages/Apply'
import BenefitsPage from './pages/Benefits'
import FAQPage from './pages/FAQ'
import Header from './pages/Header'
import Home from './pages/Home'
import WhoCanInvestPage from './pages/Invest'
import IPOSection from './pages/IPO'

function App() {


  return (
    <>
    <div className=''>
    <Header />
    <Home />
    <IPOSection />
    <IPOAboutPage />
    <BenefitsPage />
    <WhoCanInvestPage />
    <HowToApplyForIPO />
    <FAQPage />
    </div>
  
    </>
  )
}

export default App
