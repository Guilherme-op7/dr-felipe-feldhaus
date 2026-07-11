import { useState, useEffect } from 'react'

const navItems = [
  { href: 'inicio', label: 'Início' },
  { href: 'sobre', label: 'Sobre' },
  { href: 'servicos', label: 'Serviços' },
  { href: 'depoimentos', label: 'Depoimentos' },
  { href: 'contato', label: 'Contato' },
]

interface Props {
  menuAberto: boolean
  setMenuAberto: (v: boolean) => void
}

export default function Header({ menuAberto, setMenuAberto }: Props) {
  const [rolado, setRolado] = useState(false)

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-[1000] text-white backdrop-blur-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ${
        rolado
          ? 'py-4 bg-[rgba(139,107,74,0.95)]'
          : 'py-6 bg-[linear-gradient(135deg,rgba(139,107,74,0.9)_0%,rgba(139,107,74,0.7)_100%)]'
      }`}
    >
      <div className="flex justify-between items-center max-w-300 mx-auto px-8">
        <div className="font-bold text-2xl tracking-wide">
          <p>Dr. Felipe Feldhaus</p>
        </div>
        <nav>
          <ul
            className={`list-none flex flex-col items-center justify-center fixed top-20 w-full h-[calc(100vh-80px)] bg-primary transition-all duration-500 md:static md:top-auto md:flex-row md:items-center md:justify-start md:w-auto md:h-auto md:bg-transparent md:transition-none ${
              menuAberto ? 'left-0' : 'left-[-100%]'
            } md:left-auto`}
          >
            {navItems.map(({ href, label }) => (
              <li key={href} className="my-6 md:my-0 md:ml-8">
                <a
                  href={`#${href}`}
                  onClick={() => setMenuAberto(false)}
                  className="text-white no-underline font-medium transition-all duration-300 relative pb-1.25 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="block md:hidden bg-transparent border-none text-white text-2xl cursor-pointer"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label="Menu"
          >
            <i className={menuAberto ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
        </nav>
      </div>
    </header>
  )
}
