import { useEffect, useState } from "react";
import "./Entrada.css";

const Entrada = () => {
  const [entrada, setEntrada] = useState("");

  useEffect(() => {
    sessionStorage.setItem("valorTarefaEscrita", entrada);
  }, [entrada]);
  return (
    <>
      <input
        value={entrada}
        onChange={(e) => setEntrada(e.target.value)}
        className="EntradaInput"
        placeholder="Write a task..."
        type="text"
      />
    </>
  );
};

export default Entrada;
