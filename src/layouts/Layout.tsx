import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import GradientOrbs from '../components/GradientOrbs'
import ProjectHeroGlow from '../components/ProjectHeroGlow'

const PROJECT_PAGE_PATHS = [
  '/projects',
  '/projects/fine-line-production',
  '/projects/loreal',
  '/projects/angry-birds',
]

export default function Layout() {
  const { pathname } = useLocation()
  const isProjectPage = PROJECT_PAGE_PATHS.includes(pathname)

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-black">
      {isProjectPage ? <ProjectHeroGlow /> : <GradientOrbs />}
      <div className="relative flex flex-1 flex-col">
        <NavBar />
        <main className="mx-auto w-full max-w-[1440px]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
