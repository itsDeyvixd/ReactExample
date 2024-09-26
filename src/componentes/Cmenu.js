import React, { useState } from "react";
function Cmenu() {
    
    const [bvMenu, setMenu] = useState(false);
    let verMenu = () => {
    setMenu( !bvMenu ) ;
    }
    return(<>
    <button type="button" onClick={verMenu}> Menu - {bvMenu ? 'Abierto' : 'Cerrado'}</button>
    {
        bvMenu && (
    <div>
        <ul>
            <li><a href="#">Opc-1</a></li> 
            <li><a href="#">Opc-2</a></li> 
            <li><a href="#">Opc-3</a></li> 
            <li><a href="#">Opc-4</a></li> 
        </ul>
    </div>
)
}</>
);
}
export default Cmenu;
   

  