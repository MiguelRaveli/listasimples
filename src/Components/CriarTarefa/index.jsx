import Botao from "../Botao";
import Entrada from "../Entrada";
import "./CriarTarefa.css";

const CriarTarefa = ({aoClicar}) => {
  return (
    <>
      <div className="CriarTarefaContainer">
        <Entrada />
        <Botao NomeBotao={"Add"} Acao={aoClicar} />
      </div>
    </>
  );
};

export default CriarTarefa;
