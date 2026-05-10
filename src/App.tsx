import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  //CREAMOS LA FUNCION PARA VER EL ESTADO DEL BOTON
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list = ["gato", "perro", "conejo", "hamster", "pez"];
  //const list: string[] = [];

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado: ", elemento);
  };

  //RENDERIZADO CONDICIONAL PARA QUE MUESTRE UNA LISTA SI SO LONGITUD DE ELEMENTOS ES MAYOR A 0,
  //DE LO CONTRARIO MUESTRA UN MENSAJE
  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    <p>No hay elementos en la lista</p>
  );
  return (
    <Card>
      <CardBody
        title="Esta es mi Lista"
        //text="Este es el contenido de la tarjeta que vamos a utilizar"
      />
      {contenido}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
}

export default App;
