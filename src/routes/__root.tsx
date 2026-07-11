import { useState, useEffect } from 'react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import VoltarTopo from '../components/VoltarTopo'

function RootLayout() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [mostrarTopo, setMostrarTopo] = useState(false)

  useEffect(() => {
    const handleScroll = () => setMostrarTopo(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Header menuAberto={menuAberto} setMenuAberto={setMenuAberto} />
      <Outlet />
      <Footer />
      <VoltarTopo visivel={mostrarTopo} />
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
