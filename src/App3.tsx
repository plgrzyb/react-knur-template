import { useState } from "react";
import { Tabela } from "./Tabela";
function App3() {
    const dane = [{nazwa: "papaj", wiek: 104, obrazek: "jakiś obrazek"}, 
    {nazwa: "Jan", wiek: 410, obrazek: "jakiś"}, 
    {nazwa: "Paweł", wiek: 92, obrazek: "obrazek"}]

    const [dane2, setDane2] = useState(dane)

    function sortowanieR(){
        setDane2([...dane2.sort((a, b) => { return a.wiek - b.wiek })])
    }
    function sortowanieM(){
        setDane2([...dane2.sort((a, b) => { return b.wiek - a.wiek })])
    }
    
    return (
        <>
            <Tabela dane = { dane2 }></Tabela>
            <button onClick={sortowanieR}>Sortuj rosnąco</button>
            <button onClick={sortowanieM}>Sortuj malejąco</button>
        </>
    )
}


export { App3 };