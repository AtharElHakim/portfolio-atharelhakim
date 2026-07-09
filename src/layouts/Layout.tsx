import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GradientOrbs from '../components/GradientOrbs'

export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#08080c]">
      <GradientOrbs />
      <div className="relative flex flex-1 flex-col">
        <NavBar />
        <div className="mx-auto w-full max-w-[1440px]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
