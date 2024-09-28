function Comp2(props) {
    const estilo = {
        backgroundColor: "lightblue",
        color: props.c,
        fontSize: props.t,
        padding: "5px",
        borderRadius: "30px",
        margin: "1px",
        textAlign: "center", 
        fontFamily: "Microsoft Sans Serif",
    };


    return (
        <>
        <h1 style={estilo}>Hola Mundo!</h1>
        <p> Pagina de Deyvi!</p>                
        </>
    );
}

export default Comp2;