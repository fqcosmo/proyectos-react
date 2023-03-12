import Part1 from "./components/partes/Part1"
import Part2 from "./components/partes/Part2"
import Part3 from "./components/partes/Part3"
import Total from "./components/total"

const Header = (props)=>{
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Content = () =>{
  return(
    <div>
      <Part1/>
      <Part2/>
      <Part3/>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <Header title={course}/>
      <Content/>
      <Total/>
    </div>
  )
}

export default App;
