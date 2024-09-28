import React, { useState } from "react";
function Cmenu(props) {

    let option = () => {
            props.option(value) ;
    }
    const [value, setValue] = useState(props);

    const handleChange = (e) => {
        setValue(e.target.value);
        };

    const [bvMenu, setMenu] = useState(false);
    let verMenu = () => {
    setMenu( !bvMenu ) ;
    }
    return(<>
    <button type="button" onClick={verMenu}> Menu - {bvMenu ? 'Abierto' : 'Cerrado'}</button>
    {
        bvMenu && (
            <>
            <select value={value} onChange={handleChange}>
            <option value="seleccione una opcion">seleccione</option>   
            <option value="Comp1">Comp1</option>
            <option value="Comp2">Comp2</option>
            <option value="Comp3">Comp3</option>
            </select>
            <button onClick={option}>renderizar</button>
            </>
)
}</>
);
}
export default Cmenu;