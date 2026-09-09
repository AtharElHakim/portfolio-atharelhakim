/* eslint-disable react-refresh/only-export-components -- app entry: the lazy()
   route consts aren't components to hot-reload. */
import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './layouts/Layout'

/* Each page is its own chunk — the three case studies pull the bulk of the
   imagery, so they should never be in the first-load bundle. */
const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FinelinePage = lazy(() => import('./pages/FinelinePage'))
const OrealPage = lazy(() => import('./pages/OrealPage'))
const AngryBirdsPage = lazy(() => import('./pages/AngryBirdsPage'))
const SpotifyPage = lazy(() => import('./pages/SpotifyPage'))
const ParIciPage = lazy(() => import('./pages/ParIciPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/a-propos-de-moi" element={<AboutPage />} />
          <Route path="/contactez-moi" element={<ContactPage />} />
          <Route path="/projects/fine-line-production" element={<FinelinePage />} />
          <Route path="/projects/loreal" element={<OrealPage />} />
          <Route path="/projects/angry-birds" element={<AngryBirdsPage />} />
          <Route path="/projects/spotify" element={<SpotifyPage />} />
          <Route path="/projects/par-ici" element={<ParIciPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
