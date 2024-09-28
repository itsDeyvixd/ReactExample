function Comp3(props) {
    const estilo = {
        color: props.color,
        backgroundColor: props.bc,
    };

    
    const fecha = new Date();


    return (
        <>
            <p>Fecha : {fecha.toLocaleDateString()} </p>
            <p>Hora : {fecha.toLocaleTimeString()} </p>
                
        </>
    );
}

export default Comp3;