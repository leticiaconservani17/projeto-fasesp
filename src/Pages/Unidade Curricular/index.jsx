import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { useParams } from 'react-router-dom'
import './styles.css'
import { Link } from 'react-router-dom'

import iconLink from '../../assets/UnidadeCurricular/a10b1a6ce97850ee84cc7506846366618634ace4.png'
import iconForum from '../../assets/UnidadeCurricular/iconForum.svg'
import standardCardBg from '../../assets/UnidadeCurricular/c17383523eed2b053cea85cc411b48cfa422f785.png'

const andamento = [
  {
    nome: 'UC 4 - Fundamentos da Educação Inclusiva',
    progresso: 60
  },
  {
    nome: 'UC 5 - Metodologias Ativas no Ensino',
    progresso: 10
  },
  {
    nome: 'UC 6 - Psicologia do Desenvolvimento Infantil',
    progresso: 30
  }
]

const cursadas = [
  {
    nome: 'UC 1 - Didática e Práticas Pedagógicas'
  },
  {
    nome: 'UC 2 - História da Educação Brasileira'
  },
  {
    nome: 'UC 3 - Tecnologia e Educação: Novas Perspectivas'
  }
]

const cardsInfos = [
  { titulo: 'Semana de 11/08', imagem: standardCardBg },
  { titulo: 'Semana de 18/08', imagem: standardCardBg },
  { titulo: 'Semana de 25/08', imagem: standardCardBg },
  { titulo: 'Semana de 01/09', imagem: standardCardBg },
  { titulo: 'Semana de 15/09', imagem: standardCardBg },
  { titulo: 'Semana de 22/09', imagem: standardCardBg }
]

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

function UnidadeCurricular() {
  const { id } = useParams()

  const allUCs = [...andamento, ...cursadas]
  const ucEncontrada = allUCs.find((uc) => slugify(uc.nome) === id)

  const idComConteudoDisponivel = 'uc-4-fundamentos-da-educacao-inclusiva'

  return (
    <div>
      <Header />
      <div className="content">
        <div className="UC-Head">
          <p>
            <Link to="/" className="link-voltar">
              Unidade curricular
            </Link>{' '}
            / <span>{ucEncontrada?.nome || id}</span>
          </p>

          <h2>{ucEncontrada?.nome || id}</h2>
        </div>

        {slugify(id) === idComConteudoDisponivel ? (
          <div className="bodyCourse">
            <div className="banner-welcome">
              <div className="banner-content">
                <h3>BOAS-VINDAS</h3>
                <p>
                  Esta é a Unidade Curricular <br />
                  <strong>
                    Produção escrita e avaliação em língua inglesa
                  </strong>
                </p>
                <p className="extra-text">
                  Aproveite o conteúdo e bons estudos!
                </p>
              </div>
            </div>

            <div className="labelCourse">
              <p>APRESENTAÇÃO</p>
            </div>
            <div className="courseContent">
              <p>
                <strong>Olá, Estudante!</strong>
              </p>
              <p>
                Nossa Unidade Curricular tem carga horária de 66h e elas estão
                distribuídas em atividades síncronas e atividades assíncronas.
                Ao final da disciplina você será capaz de:
              </p>
              <ul>
                <li>
                  Desenvolver as competências comunicativa, estratégica,
                  discursiva, sociocultural e intercultural em língua inglesa;
                </li>
                <li>
                  Desenvolver habilidades produtivas na língua inglesa na
                  prática da expressão escrita;
                </li>
                <li>Entender o trabalho com gêneros textuais;</li>
                <li>
                  Exercitar continuamente sua atenção às especificidades da
                  linguagem escrita, aperfeiçoando as estruturas gramaticais.
                </li>
                <li>
                  Dominar questões próprias do contexto de produção, da esfera
                  de circulação e do estilo criativo.
                </li>
              </ul>
              <p className="ExtraText">Bons estudos!</p>
            </div>

            <div className="labelCourse programatico">
              <p>CONTEÚDO PROGRAMÁTICO</p>
            </div>
            <div className="linkCourse">
              <p>
                Acesse a página abaixo para acessar o plano discutido em sala.
              </p>
              <div className="clickable">
                <i>
                  <img src={iconLink} alt="Ícone de link" />
                </i>
                <a href="#">Conteúdo programático</a>
              </div>
            </div>

            <div className="labelCourse">
              <p>MURAL</p>
            </div>
            <div className="linkCourse">
              <div className="clickable">
                <i>
                  <img src={iconForum} alt="Ícone de fórum" />
                </i>
                <a href="#">Fórum de dúvidas</a>
              </div>
            </div>

            <div className="cards">
              {cardsInfos.map((card, index) => (
                <div
                  key={index}
                  className="card-dinamico"
                  style={{ backgroundImage: `url(${card.imagem})` }}
                >
                  <div className="card-title">{card.titulo}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '18px' }}>
              Conteúdo ainda não disponível para esta unidade curricular.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default UnidadeCurricular
