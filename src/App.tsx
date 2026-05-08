import Card, {CardBody} from "./components/Card"
import List from "./components/List"

function App() {

   const list = ["gato", "perro", "conejo", "hamster", "pez"];

   return (
      <Card>
         <CardBody title="Este es el titulo" text="Este es el contenido de la tarjeta que vamos a utilizar" />
         <List data = {list} />   
      </Card>
 );
}

export default App;