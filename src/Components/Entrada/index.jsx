import React from "react";
import "./Entrada.css";

const Entrada = ({ valorEntrada, setValorEntrada }) => {
  return (
    <input
      value={valorEntrada}
      onChange={(e) => setValorEntrada(e.target.value)}
      className="EntradaInput"
      placeholder="Write a task..."
      type="text"
    />
  );
};

export default Entrada;
