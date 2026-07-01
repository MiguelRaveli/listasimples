import React from "react";
import "./Tarefas.css";
const Tarefas = ({ tarefaTexto, tarefaStatus, setTarefas }) => {
  return (
    <div className="TarefaContainer">
      <input
        type="checkbox"
        id="TarefaCheckBox"
        checked={tarefaStatus}
        onChange={setTarefas}
      />
      <p className="TarefaParagrafo">{tarefaTexto}</p>
      <div className="ImagemArrastavel"></div>
    </div>
  );
};

export default Tarefas;
