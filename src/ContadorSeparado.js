import React, { useState } from "react";

function ContadorSeparado(props){
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Conteo (del separado): {contador}</p>
      <button onClick={ ()=> setContador(contador+1) }>Aumentar</button>
    </div>
  );
}

export default ContadorSeparado;