import Botao from "../Botao"
import Entrada from "../Entrada"
import "./CriarTarefa.css"

const CriarTarefa = () => {
  return (
    <>
    <div className="CriarTarefaContainer">
        <Entrada/>
        {/* <Botao NomeBotao={"Add"} Acao={console.log("Boa noite")}/> */}
    </div>
    </>
  )
}

export default CriarTarefa
