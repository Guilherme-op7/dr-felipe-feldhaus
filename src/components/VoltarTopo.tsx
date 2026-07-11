interface Props {
  visivel: boolean
}

export default function VoltarTopo({ visivel }: Props) {
  return (
    <button
      className={`fixed bottom-7.5 right-7.5 size-12.5 bg-primary text-white rounded-full flex items-center justify-center text-[19px] cursor-pointer transition-all duration-300 z-[999] shadow-[0_5px_15px_rgba(0,0,0,0.1)] border-none hover:bg-accent hover:-translate-y-[5px] ${
        visivel ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
    >
      <i className="fas fa-arrow-up" />
    </button>
  )
}
