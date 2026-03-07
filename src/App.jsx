import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import BeforeCarePage from './pages/BeforeCarePage'
import BeforeAfterPage from './pages/BeforeAfterPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/before-care" element={<BeforeCarePage />} />
        <Route path="/before-after" element={<BeforeAfterPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
