import { miPrimerComponente } from "./components/miPrimerComponente/MiPrimerComponente"

const myFuction = () => {
  return <>hola</>
};

function App() {
  return(
    <>
    <myFuction/>
    <miPrimerComponente name={"Evelyn"}lastName={"Ramirez"}/>
    </> 

  )
 
}
export default App;
