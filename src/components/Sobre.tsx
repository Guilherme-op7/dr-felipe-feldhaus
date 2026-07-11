export default function Sobre() {
  return (
    <section className="py-24 px-8 bg-white" id="sobre">
      <div className="relative text-center mb-10 md:mb-16 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-0.75 after:bg-accent">
        <h2 className="text-[32px] md:text-[40px] text-primary mb-4">Sobre o Dr. Felipe</h2>
      </div>
      <div className="max-w-300 mx-auto flex flex-col items-center gap-16 text-center lg:flex-row lg:text-left">
        <div className="flex-1 relative before:content-[''] before:absolute before:top-[-20px] before:left-[-20px] before:w-full before:h-full before:border-2 before:border-accent before:rounded-[20px] before:-z-10">
          <img
            src="/images/felipe.webp"
            alt="Foto do Dr. Felipe Feldhaus especialista em harmonização facial"
            className="w-full max-w-125 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-[29px] mb-6 text-dark">Especialista em Estética Avançada</h3>
          <p className="mb-6 leading-[1.8] text-[#555]">
            Formado em Odontologia com especialização em Harmonização Orofacial, o Dr. Felipe
            Feldhaus dedica sua carreira a proporcionar aos pacientes resultados naturais e
            harmoniosos, respeitando a individualidade de cada rosto.
          </p>
          <p className="mb-6 leading-[1.8] text-[#555]">
            Com vasta experiência em procedimentos estéticos minimamente invasivos, o Dr. Felipe
            utiliza técnicas precisas e materiais de alta qualidade para garantir segurança e
            satisfação em todos os tratamentos.
          </p>
          <p className="mb-6 leading-[1.8] text-[#555]">
            Criador do Método AurisPrime — Otomodelação Definitiva com Fragilização Controlada de
            Cartilagem, o Dr. Felipe está sempre atualizado com as mais modernas técnicas e
            tecnologias em estética facial.
          </p>
          <div className="font-display text-[32px] text-primary mt-8">Dr. Felipe Feldhaus</div>
        </div>
      </div>
    </section>
  )
}
