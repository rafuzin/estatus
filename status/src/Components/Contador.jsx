import { useState } from "react"

export default function Contador(){

    const [contador,setContador] = useState(0)

    return(
        <>
        <h1>Contador: {contador}</h1>

        <div>
            <button onClick={()=> setContador(contador - 1)}>-</button>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(0)}>resetar</button>
        </div>
        </>
    )
}