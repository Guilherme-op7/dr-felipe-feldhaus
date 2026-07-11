export default function Hero() {
  return (
    <section className="relative pt-[140px] pb-20" id="inicio">
      <div className="max-w-300 mx-auto px-8 max-sm:px-4 grid grid-cols-1 text-center gap-y-10 lg:grid-cols-2 lg:[grid-template-areas:'texto_imagem''cta_imagem'] lg:gap-x-16 lg:gap-y-0 lg:items-start lg:text-left w-full">
        <div className="lg:[grid-area:texto]">
          <h1 className="text-[32px] sm:text-[40px] md:text-[56px] mb-6 text-primary leading-[1.2]">
            Dr. Felipe Feldhaus{' '}
            <span className="block text-[24px] sm:text-[29px] md:text-[40px] text-dark">
              Harmonização Facial
            </span>
          </h1>
          <p className="text-[19px] mb-8 leading-[1.6] max-w-150 mx-auto lg:mx-0">
            Especialista em procedimentos estéticos avançados para realçar sua beleza natural
            com segurança e excelência. Transforme sua autoestima com resultados naturais e
            duradouros.
          </p>
        </div>

        <div className="flex justify-center self-center lg:[grid-area:imagem] lg:row-span-2">
          <img
            src="/images/feldhaus.webp"
            alt="Foto do Dr. Felipe Feldhaus especialista em harmonização facial"
            className="w-full max-w-125 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          />
        </div>

        <div className="flex justify-center lg:justify-start lg:[grid-area:cta] lg:self-start lg:mt-2">
          <a
            href="https://wa.me/5541999052847?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta."
            className="inline-flex items-center justify-center bg-primary text-white py-4 px-8 rounded-full no-underline font-semibold transition-all duration-300 shadow-[0_10px_20px_rgba(139,107,74,0.3)] hover:-translate-y-[5px] hover:shadow-[0_15px_30px_rgba(139,107,74,0.4)] hover:bg-accent"
          >
            Agende sua Consulta
          </a>
        </div>
      </div>
    </section>
  )
}
