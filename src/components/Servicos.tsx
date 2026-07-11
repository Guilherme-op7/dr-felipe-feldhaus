import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'
import servicos from '../data/servicos'

export default function Servicos() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!emblaApi) return
    const sync = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    sync()
    emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()))
    emblaApi.on('reInit', sync)
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo  = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  return (
    <section className="py-14 px-3 sm:py-16 sm:px-4 md:py-24 md:px-8 bg-cream" id="servicos">
      <div className="relative text-center mb-10 md:mb-16 after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-0.75 after:bg-accent">
        <h2 className="text-[32px] md:text-[40px] text-primary mb-4">Nossos Serviços</h2>
      </div>

      <div className="max-w-300 mx-auto">
        <div className="flex items-center gap-1.5 md:gap-2 lg:gap-4 mt-12">
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="shrink-0 size-9 md:size-10 lg:size-12 rounded-full border-none bg-primary text-white text-[13px] md:text-sm lg:text-base flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(139,107,74,0.3)] hover:bg-accent hover:scale-110"
          >
            <i className="fas fa-chevron-left" />
          </button>

          <div className="overflow-hidden flex-1" ref={emblaRef}>
            <div className="flex -ml-8">
              {servicos.map((servico) => (
                <div
                  key={servico.titulo}
                  className="min-w-0 shrink-0 grow-0 pl-8 basis-full md:basis-1/2 lg:basis-1/3 flex flex-col"
                >
                  <div className="group flex-1 flex flex-col bg-white rounded-[15px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
                    <div className="h-40 md:h-45 lg:h-50 overflow-hidden shrink-0">
                      <img
                        loading="lazy"
                        src={servico.imagem}
                        alt={servico.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-4.5 md:p-6 lg:p-8">
                      <h3 className="text-xl md:text-2xl mb-4 text-primary">{servico.titulo}</h3>
                      <p className="text-[#666] leading-[1.6] flex-1">{servico.descricao}</p>
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-1.25 text-primary font-semibold no-underline transition-all duration-300 hover:text-accent [&:hover_i]:translate-x-[5px] mt-6"
                      >
                        Saiba mais <i className="fas fa-arrow-right transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollNext}
            aria-label="Próximo"
            className="shrink-0 size-9 md:size-10 lg:size-12 rounded-full border-none bg-primary text-white text-[13px] md:text-sm lg:text-base flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(139,107,74,0.3)] hover:bg-accent hover:scale-110"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 md:gap-2 mt-5 md:mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Serviço ${i + 1}`}
              className={`size-2.5 rounded-full border-none bg-accent cursor-pointer transition-[opacity,transform] duration-300 p-0 ${
                i === selectedIndex ? 'opacity-100 scale-[1.2]' : 'opacity-35'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
