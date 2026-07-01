import { useState } from "react";
import "./App.css";
import Tarefas from "./Components/Tarefa/Tarefas";
import CriarTarefa from "./Components/CriarTarefa";
import TarefasCompletas from "./Components/TarefasCompletas";
function App() {
  const [tarefas, setTarefas] = useState([
    {
      NomeTarefa: "Lavar a louça",
      StatusTarefa: false,
    },
    {
      NomeTarefa: "Ir as compras",
      StatusTarefa: true,
    },
    {
      NomeTarefa: "Dar banho no cachorro",
      StatusTarefa: false,
    },
  ]);

  const alternarStatus = (index) => {
    setTarefas((tarefasAtuais) => {
      // Cria uma nova referência do array
      return tarefasAtuais.map((tarefa, i) => {
        if (i === index) {
          // Retorna um novo objeto com o valor invertido
          return { ...tarefa, StatusTarefa: !tarefa.StatusTarefa };
        }
        return tarefa;
      });
    });
  };

  const criarTarefa = () => {
    const novaTarefa = {
      NomeTarefa: sessionStorage.getItem("valorTarefaEscrita"),
      StatusTarefa: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <>
      <div className="home">
        <h1 className="Titulo">Personal</h1>
        <div className="TarefasContainer">
          {tarefas.map((tarefa, index) => {
            return (
              <Tarefas
                key={index}
                tarefaTexto={tarefa.NomeTarefa}
                tarefaStatus={tarefa.StatusTarefa}
                setTarefas={() => alternarStatus(index)}
              />
            );
          })}
        </div>
        <div>
          <h2>COMPLETED</h2>
          {tarefas.map((tarefa, index) => {
            return (
              <Tarefas
                key={index}
                tarefaTexto={tarefa.NomeTarefa}
                tarefaStatus={tarefa.StatusTarefa}
                setTarefas={() => alternarStatus(index)}
              />
            );
          })}
        </div>
      </div>
      <CriarTarefa aoClicar={criarTarefa} />
    </>
  );
}

export default App;
