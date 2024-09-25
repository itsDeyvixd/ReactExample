import React from'react';



function App(props) {

  const fecha = new Date();
  const estilo = {
    backgroundColor: 'lightblue',
    color: props.c,
    fontSize: props.t,
    padding: '5px',
    borderRadius: '30px',
    margin: '1px',
    textAlign: 'center', // add this to center the text
    fontFamily: 'Microsoft Sans Serif' // add this to change the font    
  }

  return (
    <>
        <h1 style={estilo}>Hola Mundo!</h1>
        <p>  Pagina de Deyvi!</p>
        <p>Fecha : {fecha.toLocaleDateString()} </p>
        <p>Hora : {fecha.toLocaleTimeString()} </p>
    </>
      );
}

export default App;
