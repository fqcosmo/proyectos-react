const Total = (props) => {
    const mensaje = 'Number of excercises :';
    const numero1 = 10
    const numero2 = 7
    const numero3 = 14    
    return(
        <div><p>{mensaje} {numero1 + numero2 + numero3}</p></div>
    )
}


export default Total;