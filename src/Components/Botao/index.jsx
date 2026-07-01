import "./Botao.css"

const Botao = ({NomeBotao, Acao}) => {
  return (
    <>
    <button className="Botao" onClick={Acao}>{NomeBotao}</button>
    </>
  )
}

export default Botao
