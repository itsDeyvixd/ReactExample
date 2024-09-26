import React, { useState } from "react";

function App(props) {
  const [cont, setCont] = useState(0);
  const [info, SetInfo] = useState([]);
  const fecha = new Date();
  const estilo = {
    backgroundColor: "lightblue",
    color: props.c,
    fontSize: props.t,
    padding: "5px",
    borderRadius: "30px",
    margin: "1px",
    textAlign: "center", // add this to center the text
    fontFamily: "Microsoft Sans Serif", // add this to change the font
  };
  let getData = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((rta) => {
          return rta.json();
        })
        .then((data) => {
          console.log(JSON.stringify(data));
          SetInfo(data);
        })
        .catch((err) => {
          console.log("Error : " + err.message);
        });
    } catch (error) {
      {
        console.log("Error : " + error.message);
      }
    }
  };

  return (
    <>
      <h1 style={estilo}>Hola Mundo!</h1>
      <p> Pagina de Deyvi!</p>
      <p>Fecha : {fecha.toLocaleDateString()} </p>
      <p>Hora : {fecha.toLocaleTimeString()} </p>

      <h3> Cont:{cont}</h3>
      <button type="button" onClick={() => setCont(cont + 1)}>
        Incrementar
      </button>
      <button type="button" onClick={() => setCont(cont - 1)}>
        Decrementar
      </button>
      <button type="button" onClick={getData}>
        {" "}
        Obtener datos
      </button>
      <h2>Comentarios:</h2>
      <ul>
        {info.map((item, index) => (
          <li key={index}>
            ID: {item.id} - Name: {item.name} - Email: {item.email} - Body: {item.body}{" "}
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;
