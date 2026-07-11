export interface Depoimento {
  texto: string
  imagem: string
  nome: string
  especialidade: string
}

const depoimentos: Depoimento[] = [
  {
    texto:
      'O Dr. Felipe transformou minha autoestima! Os resultados da harmonização facial foram incríveis - naturais e exatamente como eu queria. Profissional extremamente competente e atencioso.',
    imagem: '/images/retrato-de-um-jovem-barbudo-concentrado.webp',
    nome: 'Lucas Alves',
    especialidade: 'Paciente de Harmonização Facial',
  },
  {
    texto:
      'Minha experiência com o Dr. Felipe foi maravilhosa! A harmonização facial ficou super natural e valorizou ainda mais meus traços. Ele é muito detalhista, atencioso e transmite muita segurança em cada etapa do processo. Recomendo de olhos fechados',
    imagem: 'https://randomuser.me/api/portraits/women/43.jpg',
    nome: 'Ana Carolina',
    especialidade: 'Paciente de Harmonização Facial',
  },
  {
    texto:
      'Fiz a otomodelação com o Dr. Felipe e estou maravilhada com o resultado! Minhas orelhas sempre foram um complexo e agora estão perfeitas. O Método AurisPrime é realmente revolucionário.',
    imagem: 'https://randomuser.me/api/portraits/women/65.jpg',
    nome: 'Juliana Martins',
    especialidade: 'Paciente de Otomodelação',
  },
]

export default depoimentos
