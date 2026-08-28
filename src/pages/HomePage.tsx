import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Tools from '../components/Tools'
import Contact from '../components/Contact'
import Seo from '../components/Seo'

export default function HomePage() {
  return (
    <>
      <Seo
        bareTitle
        title="Athar El Hakim · UX/UI Designer & Directrice Artistique"
        description="Portfolio d'Athar El Hakim, UX/UI Designer : études de cas, projets de recherche utilisateur et direction artistique."
        path="/"
      />
      <Hero />
      <Projects />
      <Tools />
      <Contact transparent />
    </>
  )
}
