import { H1, Body1 } from '../components/Typography'
import Button from '../components/Button'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-8 text-center md:px-[var(--nav-edge-w)]">
      <Seo
        title="Page introuvable"
        description="Cette page n'existe pas ou a été déplacée."
        path="/404"
        noindex
      />
      <p className="font-syne text-7xl leading-none text-white/25 md:text-8xl">
        404
      </p>
      <H1>Page introuvable</H1>
      <Body1 className="max-w-[460px] font-light">
        Le lien est peut-être cassé, ou la page a changé d'adresse. Revenons à
        l'accueil.
      </Body1>
      <Button to="/" className="mt-2">
        Retour à l'accueil
      </Button>
    </section>
  )
}
