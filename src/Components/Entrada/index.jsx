import { useEffect, useState } from "react";
import "./Entrada.css";

const Entrada = ({ aoAdicionar }) => {
  const [entrada, setEntrada] = useState("");
  return (
    <>
      <input
        value={entrada}
        onChange={(e) => (
          setEntrada(e.target.value),
          sessionStorage.setItem("valorTarefaEscrita", entrada.trim())
        )}
        className="EntradaInput"
        placeholder="Write a task..."
        type="text"
      />
    </>
  );
};

export default Entrada;
