import depoimentos from '../data/depoimentos'

export default function Depoimentos() {
  return (
    <section className="py-24 px-8 bg-white" id="depoimentos">
      <div className="relative text-center mb-10 md:mb-16 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-0.75 after:bg-accent">
        <h2 className="text-[32px] md:text-[40px] text-primary mb-4">Depoimentos</h2>
      </div>
      <div className="max-w-300 mx-auto">
        <div className="mt-12 flex flex-wrap gap-8 justify-center">
          {depoimentos.map((dep) => (
            <div
              key={dep.nome}
              className="depoimento-card bg-cream p-10 max-sm:p-6 rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex-[1_1_300px] max-w-125 relative"
            >
              <div className="relative z-10 mb-6 leading-[1.8] text-[#555] italic">
                <p>{dep.texto}</p>
              </div>
              <div className="flex items-center">
                <img
                  loading="lazy"
                  src={dep.imagem}
                  alt={dep.nome}
                  className="size-15 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg text-primary mb-1.25">{dep.nome}</h4>
                  <p className="text-[#777] text-sm">{dep.especialidade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
