import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FinelinePage from './pages/FinelinePage'
import OrealPage from './pages/OrealPage'
import AngryBirdsPage from './pages/AngryBirdsPage'

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
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
