import React from "react";
import "./TarefasCompletas.css";
import { SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// 1. Criamos o subcomponente para os Hooks funcionarem sem erro
const TarefaCompletaItem = ({ tarefa, alternarStatus }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: tarefa.id,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} style={style} className="TarefaContainer">
      <input
        type="checkbox"
        checked={tarefa.StatusTarefa}
        onChange={() => alternarStatus(tarefa.id)}
      />
      <p className="TarefaParagrafo">{tarefa.NomeTarefa}</p>
      
      {/* 2. Colocamos as propriedades de arrastar apenas na imagem/ícone */}
      <div 
        className="ImagemArrastavel"
        {...attributes}
        {...listeners}
      ></div>
    </div>
  );
};

// 3. Componente principal
const TarefasCompletas = ({ tarefas, alternarStatus }) => {
  // Como aqui só queremos as tarefas concluídas, filtramos primeiro
  const tarefasCompletas = tarefas.filter((t) => t.StatusTarefa === true);
  
  // Pegamos apenas os IDs das tarefas concluídas para o Contexto
  const tarefasIds = tarefasCompletas.map((t) => t.id);

  return (
    <>
      <h2 className="TituloTarefasCompletas">COMPLETED</h2>
      
      <SortableContext items={tarefasIds} strategy={verticalListSortingStrategy}>
        {tarefasCompletas.map((tarefa) => (
          <TarefaCompletaItem
            key={tarefa.id}
            tarefa={tarefa}
            alternarStatus={alternarStatus}
          />
        ))}
      </SortableContext>
    </>
  );
};

export default TarefasCompletas;