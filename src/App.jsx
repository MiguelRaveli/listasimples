import { useEffect, useState } from "react";
import "./App.css";
import Tarefas from "./Components/Tarefa";
import CriarTarefa from "./Components/CriarTarefa";
import TarefasCompletas from "./Components/TarefasCompletas";

// IMPORTANTE: Adicione o arrayMove aqui!
import {
  closestCorners,
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      NomeTarefa: "Lavar a louça",
      StatusTarefa: false,
      id: crypto.randomUUID(),
    },
    {
      NomeTarefa: "Ir as compras",
      StatusTarefa: true,
      id: crypto.randomUUID(),
    },
    {
      NomeTarefa: "Dar banho no cachorro",
      StatusTarefa: false,
      id: crypto.randomUUID(),
    },
  ]);

  const [encontrarTarefa, setEncontrarTarefa] = useState(
    tarefas.some((tarefa) => tarefa.StatusTarefa === true),
  );

  // 1. CORREÇÃO DE LÓGICA: Agora recebe o ID em vez do INDEX
  const alternarStatus = (id) => {
    setTarefas((tarefasAtuais) => {
      return tarefasAtuais.map((tarefa) => {
        if (tarefa.id === id) {
          // Compara pelo ID
          return { ...tarefa, StatusTarefa: !tarefa.StatusTarefa };
        }
        return tarefa;
      });
    });
  };

  const [textoEntrada, setTextoEntrada] = useState("");

  const criarTarefa = () => {
    if (!textoEntrada) return;

    const novaTarefa = {
      NomeTarefa: textoEntrada,
      StatusTarefa: false,
      id: crypto.randomUUID(),
    };

    setTarefas([...tarefas, novaTarefa]);
    setTextoEntrada("");
  };

  useEffect(() => {
    setEncontrarTarefa(tarefas.some((tarefa) => tarefa.StatusTarefa === true));
  }, [tarefas]);

  // 2. ADIÇÃO DA FUNÇÃO DO DND-KIT: O que acontece ao soltar o item
  const lidarComFimDoArrasto = (event) => {
    const { active, over } = event;

    // Se soltou fora da lista ou no mesmo lugar, ignora
    if (!over || active.id === over.id) {
      return;
    }

    setTarefas((tarefasAtuais) => {
      // Procura as posições usando o ID
      const posicaoAntiga = tarefasAtuais.findIndex((t) => t.id === active.id);
      const posicaoNova = tarefasAtuais.findIndex((t) => t.id === over.id);

      // Reordena o array e atualiza o estado
      return arrayMove(tarefasAtuais, posicaoAntiga, posicaoNova);
    });
  };

  // NOVA CONFIGURAÇÃO DE SENSORES
  const sensores = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10, // No PC, exige que arraste 5px antes de ativar (evita arrastar sem querer num clique)
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100, // No celular, o usuário precisa segurar a tarefa por 250ms para começar a arrastar
        tolerance: 5, // Permite que o dedo trema até 5px sem cancelar o arrasto
      },
    }),
  );

  return (
    <>
      <div className="home">
        <h1 className="Titulo">Personal</h1>
        <div className="TarefasContainer">
          {/* O DndContext agora envolve a lista de pendentes e a de completas */}
          <DndContext
            sensors={sensores}
            collisionDetection={closestCorners}
            onDragEnd={lidarComFimDoArrasto}
          >
            <Tarefas tarefas={tarefas} alternarStatus={alternarStatus} />

            {encontrarTarefa ? (
              <TarefasCompletas
                tarefas={tarefas}
                alternarStatus={alternarStatus}
              />
            ) : (
              ""
            )}
          </DndContext>
        </div>
      </div>

      <CriarTarefa
        aoClicar={criarTarefa}
        valor={textoEntrada}
        setValor={setTextoEntrada}
      />
    </>
  );
}

export default App;
