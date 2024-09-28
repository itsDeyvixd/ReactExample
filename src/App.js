import React, { useRef, useState } from "react";
import Cmenu from "./componentes/Cmenu.js";
import Comp1 from "./componentes/Comp1.js";
import Comp2 from "./componentes/Comp2.js";
import Comp3 from "./componentes/Comp3.js";

function App(props) {
  const [menu, setMenu] = useState("");
  const [cont, setCont] = useState(0);
  const [oe, setOE] = useState(0);
  const [info, SetInfo] = useState([
    {
      id: 1,
      postId: 2,
      name: "Fullstack",
      email: "fs@fs.com",
      body: "este es el body",
    },
  ]);
  const pID = useRef(1);
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
  let buscarId = () => {
    console.log("holaaaa: " + pID.current.value);

    info.forEach((d) => {
      if (d.id === parseInt(pID.current.value)) {
        console.log("encontreeee " + JSON.stringify(d));
        setOE(d);
      } else {
      }
    });
  };

  let msgHijo = (msg) => {
    console.log("El msg del hijo es: " + msg);
  };

  let option = (option) => {
    console.log("la opcion es:" + option);
    setMenu(option);
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
            <h3>ID: {item.id} </h3>
            <p>Post ID: {item.postId}</p>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Body: {item.body}</p>
          </li>
        ))}
      </ul>

      <div>
        <input type="text" placeholder="Ingrese el id para buscar" ref={pID} />
        <button
          type="button"
          onClick={() => {
            buscarId();
          }}
        >
          Buscar por ID
        </button>
      </div>

      <div>
        <Cmenu option={option} />
      </div>
      {menu == "Comp1" && (
        <div>
          <Comp1 color="green" bc="pink" obj={oe} msgXpapa={msgHijo} />
        </div>
      )}
      {menu == "Comp2" && (
        <div>
          <Comp2 />
        </div>
      )}
      {menu == "Comp3" && (
        <div>
          <Comp3 />
        </div>
      )}
    </>
  );
}

export default App;
