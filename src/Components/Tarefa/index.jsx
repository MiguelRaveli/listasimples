import React from "react";
import "./Tarefas.css";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// 1. Criamos um sub-componente isolado para poder usar o Hook com segurança
const TarefaItem = ({ tarefa, index, alternarStatus }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: tarefa.id, // OBRIGATÓRIO: Use um ID único, não o index
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

      {/* 2. Colocamos os listeners de arrastar SOMENTE na imagem/ícone */}
      <div className="ImagemArrastavel" {...attributes} {...listeners}>
        {/* Ícone de arrastar fica aqui */}
      </div>
    </div>
  );
};

// 3. O Componente principal apenas renderiza a lista
const Tarefas = ({ tarefas, alternarStatus }) => {
  // O SortableContext prefere receber um array apenas com os IDs na ordem atual
  const tarefasIds = tarefas.map((t) => t.id);

  return (
    <SortableContext items={tarefasIds} strategy={verticalListSortingStrategy}>
      {tarefas.map((tarefa, index) => {
        if (tarefa.StatusTarefa === true) {
          return null;
        }

        return (
          <TarefaItem
            key={tarefa.id} // OBRIGATÓRIO: A key deve ser o ID, não o index
            tarefa={tarefa}
            index={index}
            alternarStatus={alternarStatus}
          />
        );
      })}
    </SortableContext>
  );
};

export default Tarefas;
