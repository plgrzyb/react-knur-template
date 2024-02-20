

function Temperature(props) {
  // const unit = props.unit
  // const temperature = props.temperatura 
  const {unit, temperatura} = props
    return (
        <>
        <p>Temperatura wynosi { temperatura + unit }</p>        
        </>
    );
  }
export { Temperature };