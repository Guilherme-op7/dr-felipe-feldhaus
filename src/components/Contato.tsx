export default function Contato() {
  return (
    <section className="py-24 px-8 bg-cream" id="contato">
      <div className="relative text-center mb-10 md:mb-16 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-0.75 after:bg-accent">
        <h2 className="text-[32px] md:text-[40px] text-primary mb-4">Agende sua Consulta</h2>
      </div>
      <div className="max-w-300 mx-auto">
        <div className="max-w-200 mx-auto">
          <h3 className="text-[29px] mb-6 text-dark">Entre em Contato</h3>
          <p className="mb-8 leading-[1.8] text-[#555]">
            Estamos à disposição para esclarecer todas as suas dúvidas e agendar sua consulta.
            Entre em contato diretamente pelos canais abaixo.
          </p>

          <div className="flex items-start mb-6">
            <i className="fas fa-map-marker-alt text-[19px] text-primary mr-4 mt-[3px]" />
            <div>
              <h4 className="text-lg mb-1.25 text-dark">Endereço</h4>
              <p className="text-[#777]">
                Rua Coronel Joaquim Ignácio Taborda Ribas, 59 - Bigorrilho - Curitiba - PR,
                80730-330
              </p>
            </div>
          </div>

          <div className="my-10 rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.954734060646!2d-49.3010913!3d-25.4397746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3934cd1f607%3A0xc6d0d5043b0adfcb!2sRua%20Coronel%20Joaquim%20Ign%C3%A1cio%20Taborda%20Ribas%2C%2059%20-%20Bigorrilho%2C%20Curitiba%20-%20PR%2C%2080730-330!5e0!3m2!1spt-BR!2sbr!4v1750456482650!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica no Google Maps"
            />
          </div>

          <div className="flex items-start mb-6">
            <i className="fab fa-whatsapp text-[19px] text-primary mr-4 mt-[3px]" />
            <div>
              <h4 className="text-lg mb-1.25 text-dark">WhatsApp Comercial e Agendamentos</h4>
              <p>
                <a href="https://wa.me/5541999052847?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta." className="text-[#777] no-underline transition-all duration-300 hover:text-primary">
                  (41) 99905-2847
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <i className="fab fa-whatsapp text-[19px] text-primary mr-4 mt-[3px]" />
            <div>
              <h4 className="text-lg mb-1.25 text-dark">WhatsApp Suporte</h4>
              <p>
                <a href="https://wa.me/5541999096383?text=Ol%C3%A1,%20preciso%20de%20suporte." className="text-[#777] no-underline transition-all duration-300 hover:text-primary">
                  (41) 99909-6383
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <i className="fas fa-envelope text-[19px] text-primary mr-4 mt-[3px]" />
            <div>
              <h4 className="text-lg mb-1.25 text-dark">Email</h4>
              <p>
                <a href="mailto:felipeldfeldhaus@gmail.com" className="text-[#777] no-underline transition-all duration-300 hover:text-primary">
                  felipeldfeldhaus@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start mb-6">
            <i className="fas fa-id-card text-[19px] text-primary mr-4 mt-[3px]" />
            <div>
              <h4 className="text-lg mb-1.25 text-dark">Registro Profissional</h4>
              <p className="text-[#777]">CRO/PR 32.885</p>
            </div>
          </div>

          <div className="flex mt-8 gap-4">
            <a
              href="https://www.instagram.com/dr.felipeldfeldhaus"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center size-10 rounded-full bg-primary text-white transition-all duration-300 hover:bg-accent hover:-translate-y-[3px]"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://wa.me/5541999052847?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center size-10 rounded-full bg-primary text-white transition-all duration-300 hover:bg-accent hover:-translate-y-[3px]"
            >
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
