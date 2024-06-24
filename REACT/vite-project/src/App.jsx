import GetPosts from "./components/GetPosts";
import { MiPrimerComponente } from "./components/miPrimerComponente/MiPrimerComponente";
import Ricky from "./components/miPrimerComponente/Ricky";

const MyFuction = () => {
  return <>hola</>;
};

function App() {
  return (
    <>
      <MyFuction />
      <MiPrimerComponente name={"Evelyn"} lastName={"Ramirez"} />
      <GetPosts />
      <Ricky />
    </>
  );
}
export default App;
