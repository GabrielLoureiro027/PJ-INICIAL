import React from "react";
import style from "./UseProps.module.css";

const UseProps = (props) => {
  console.log(props);
  return (
    <div className={style.card}>
      <img src={props.imagem} alt="" className={style.img} />
      <h4>{props.titulo}</h4>
      <p>{props.descricao}</p>
      <button className={style.botao}>Visualizar</button>
    </div>
  );
};

export default UseProps;

// import React from "react";
// import style from "./UseProps.module.css";

// const UseProps = (props) => {
//   console.log(props);
//   return (
//     <div className={style.card}>
//       <img src={props.imagem} alt="" className={style.img} />
//       <h4>{props.titulo}</h4>
//       <p>{props.descricao}</p>
//       <button className={style.botao}>Visualizar</button>
//     </div>
//   );
// };

// export default UseProps;
