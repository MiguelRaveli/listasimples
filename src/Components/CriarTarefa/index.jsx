import Botao from "../Botao";
import Entrada from "../Entrada";
import "./CriarTarefa.css";

const CriarTarefa = ({ aoClicar, valor, setValor }) => {
  return (
    <div className="CriarTarefaContainer">
      <Entrada valorEntrada={valor} setValorEntrada={setValor} />
      <Botao NomeBotao={"Add"} Acao={aoClicar} />
    </div>
  );
};

export default CriarTarefa;