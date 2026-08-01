import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Difference from './components/Difference'
import TrustBar from './components/TrustBar'
import Story from './components/Story'
import Menu from './components/Menu'
import Brewmobile from './components/Brewmobile'
import PressBand from './components/PressBand'
import Proof from './components/Proof'
import Visit from './components/Visit'
import Footer from './components/Footer'
import MenuPage from './pages/MenuPage'
import SmoothScroll from './components/SmoothScroll'

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Difference />
        <TrustBar />
        <Story />
        <Menu />
        <Brewmobile />
        <PressBand />
        <Proof />
        <Visit />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="w-full max-w-none">
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
