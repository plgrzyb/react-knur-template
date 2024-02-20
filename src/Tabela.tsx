
function Tabela(props){
    console.log(props.dane)

    return (
        <>
            {props.dane.map((p) => {return <><p>{p.nazwa}</p> <p>{p.wiek}</p> <p>{p.obrazek}</p></>})}

        </>
    )
}
export { Tabela }