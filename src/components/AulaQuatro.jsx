import React from "react";
import UseProps from "./UseProps";
import style from "./AulaQuatro.module.css";
import { useState } from "react";

const AulaQuatro = () => {
  const [jogadores] = useState([
    {
      id: 1,
      imagem:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Vin%C3%ADcius_J%C3%BAnior_pelo_Real_Madrid.png",
      titulo: "Vinicius Jr.",
      descricao:
        "Vinicius Jr. é jogador de futebol e atua pelo Real Madrid e pela seleção brasileira."
    }
  ]);
  return (
    <div>
      <h3>Lista de Jogadores</h3>
      <div className={style.card}>
        {jogadores.map((jg) => (
          <UseProps
            key={jg.id}
            imagem={jg.imagem}
            titulo={jg.titulo}
            descricao={jg.descricao}
          />
        ))}
      </div>
    </div>
  );
};

export default AulaQuatro;
