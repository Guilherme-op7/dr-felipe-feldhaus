import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Servicos from '../components/Servicos'
import Depoimentos from '../components/Depoimentos'
import Contato from '../components/Contato'

function IndexPage() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Contato />
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: IndexPage,
})
