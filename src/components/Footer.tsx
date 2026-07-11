export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 px-8 pb-8 relative">
      <div className="max-w-300 mx-auto flex flex-wrap gap-8 max-[480px]:flex-col max-[480px]:items-center max-[480px]:text-center">
        <div className="flex-[1_1_200px]">
          <h3 className="text-[21px] mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12.5 after:h-0.5 after:bg-accent max-[480px]:after:left-1/2 max-[480px]:after:-translate-x-1/2">
            Dr. Felipe Feldhaus
          </h3>
          <p className="mb-4 leading-[1.6] text-[#bbb]">
            Especialista em Harmonização Facial e Estética Avançada, dedicado a proporcionar
            resultados naturais e harmoniosos que elevam a autoestima e a confiança.
          </p>
        </div>
        <div className="flex-[1_1_200px]">
          <h3 className="text-[21px] mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12.5 after:h-0.5 after:bg-accent max-[480px]:after:left-1/2 max-[480px]:after:-translate-x-1/2">
            Serviços
          </h3>
          <ul className="list-none">
            <li className="mb-[13px]">
              <a href="#servicos" className="text-[#bbb] no-underline transition-all duration-300 hover:text-accent">
                Harmonização Facial
              </a>
            </li>
            <li className="mb-[13px]">
              <a href="#servicos" className="text-[#bbb] no-underline transition-all duration-300 hover:text-accent">
                Otomodelação Método AurisPrime
              </a>
            </li>
            <li className="mb-[13px]">
              <a href="#servicos" className="text-[#bbb] no-underline transition-all duration-300 hover:text-accent">
                Preenchimento Facial
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-[1_1_200px]">
          <h3 className="text-[21px] mb-6 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12.5 after:h-0.5 after:bg-accent max-[480px]:after:left-1/2 max-[480px]:after:-translate-x-1/2">
            Contato
          </h3>
          <p className="mb-4 leading-[1.6] text-[#bbb]">
            <i className="fas fa-map-marker-alt" /> Rua Coronel Joaquim Ignácio Taborda Ribas,
            59 - Bigorrilho - Curitiba - PR, 80730-330
          </p>
          <p className="mb-4 leading-[1.6] text-[#bbb]">
            <i className="fab fa-whatsapp" />{' '}
            <a href="https://wa.me/5541999052847?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta." className="text-[#bbb] no-underline hover:text-accent transition-all duration-300">
              (41) 99905-2847
            </a>{' '}
            - WhatsApp Comercial e Agendamentos
          </p>
          <p className="mb-4 leading-[1.6] text-[#bbb]">
            <i className="fab fa-whatsapp" />{' '}
            <a href="https://wa.me/5541999096383?text=Ol%C3%A1,%20preciso%20de%20suporte." className="text-[#bbb] no-underline hover:text-accent transition-all duration-300">
              (41) 99909-6383
            </a>{' '}
            - WhatsApp Suporte
          </p>
          <p className="mb-4 leading-[1.6] text-[#bbb]">
            <i className="fas fa-envelope" /> felipeldfeldhaus@gmail.com
          </p>
        </div>
      </div>
      <div className="max-w-300 mx-auto mt-8 pt-8 border-t border-white/10 text-center text-[#bbb] text-sm">
        <p>&copy; 2026 Dr. Felipe Feldhaus. Todos os direitos reservados. CRO/PR 32.885</p>
      </div>
    </footer>
  )
}
