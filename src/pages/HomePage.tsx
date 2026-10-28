import Hero from '../components/Hero'
import Projects from '../components/Projects'
import CommunicationTeaser from '../components/CommunicationTeaser'
import Tools from '../components/Tools'
import Contact from '../components/Contact'
import Seo from '../components/Seo'

export default function HomePage() {
  return (
    <>
      <Seo
        bareTitle
        title="Athar El Hakim · UX/UI Designer & Créatrice de contenu"
        description="Portfolio d'Athar El Hakim, UX/UI Designer : études de cas, projets de recherche utilisateur et direction artistique."
        path="/"
      />
      <Hero />
      <Projects />
      <CommunicationTeaser />
      <Tools />
      <Contact transparent />
    </>
  )
}
