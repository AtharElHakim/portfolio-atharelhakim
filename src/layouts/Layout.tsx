import { Suspense, useLayoutEffect } from 'react'
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

/* Client-side navigation keeps the previous page's scroll position, so every
   route change needs an explicit reset. Keyed on pathname only: in-page anchor
   links (CaseStudyNav) change the hash without a pathname change and are left
   alone, and a deep link that arrives with a hash keeps its native jump. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  const { pathname } = useLocation()
  const isProjectPage = PROJECT_PAGE_PATHS.includes(pathname)

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-black">
      <ScrollToTop />
      {isProjectPage ? <ProjectHeroGlow /> : <GradientOrbs />}
      <div className="relative flex flex-1 flex-col">
        <NavBar />
        <main className="mx-auto w-full max-w-[1440px]">
          <Suspense fallback={<div className="min-h-[70vh]" />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  )
}
