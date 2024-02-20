import { useState } from 'react'
function App() {
  const [licznik, setLicznik] = useState(0)
  function licz(){
    setLicznik((aktualnaWartosc) => {return aktualnaWartosc + 1})
  }
  return (
    <>
      <p>{licznik}</p>
      <button onClick={licz}>Dodaj</button>
      <h1>KNURCAMP ELO</h1>
    </>
  );
}

export { App };
