import './styles.css'
import JSTOR from '../../../assets/Sistemas satélites/3a51e4f280c43d0b63a622cebd5110f571fa1934.png'
import BiblitecaV from '../../../assets/Sistemas satélites/b31b9ba69b7bf9700c86a8f4004f34416c6a2731.png'
import NucleoPsicopedagógico from '../../../assets/Sistemas satélites/4b5ad26092aea2dd61459019a34345d8e54bd40f.png'
import PortalFinanceiro from '../../../assets/Sistemas satélites/b6f0eb851d46a0add097b57e7f57b12fa213936b.png'
import SecretariaV from '../../../assets/Sistemas satélites/6d9325baf84e5bb5d8b0c2375eb9535e09de36ca.png'
import Microsoft from '../../../assets/Sistemas satélites/ea1db48c13545f3f327c3e5dc34079a0b131a6b9.png'
import CursosExtensao from '../../../assets/Sistemas satélites/37561af3a3392079406585fec734303e1671afec.png'
import SIRES from '../../../assets/Sistemas satélites/ea98d8d7d4cb99b5774827fdef372a3b22ba9b4a.png'
import NEI from '../../../assets/Sistemas satélites/2950fbd1d145487dc650fbbe7c1fae492753a0e4.png'

const sistemas = [
  { nome: 'JSTOR', imagem: JSTOR },
  { nome: 'Biblioteca Virtual', imagem: BiblitecaV },
  {
    nome: 'Núcleo de Apoio Psicopedagógico FASESP',
    imagem: NucleoPsicopedagógico
  },
  { nome: 'Portal Financeiro', imagem: PortalFinanceiro },
  { nome: 'Secretaria Virtual', imagem: SecretariaV },
  { nome: 'Microsoft Office 365', imagem: Microsoft },
  { nome: 'Cursos de Extensão', imagem: CursosExtensao },
  { nome: 'SIRES', imagem: SIRES },
  { nome: 'Atividades NEI', imagem: NEI }
]

function SistemasSatelites() {
  return (
    <div className="satelites-grid">
      {sistemas.map((item, index) => (
        <div className="satelites-card" key={index}>
          <img src={item.imagem} alt={item.nome} />
        </div>
      ))}
    </div>
  )
}

export default SistemasSatelites
