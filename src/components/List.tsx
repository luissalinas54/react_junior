import { useState } from "react";
type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

//funcion que al dar click en un elemento de la lista, muestra el valor en consola
//useState permite guardar y actualizar datos dentro del componente;
//cuando el estado cambia, React vuelve a renderizar el componente automáticamente
// index almacena el valor actual del estado y setIndex es la función que permite actualizar ese valor y volver a renderizar el componente
// el ?. indica: si etsa funcion se encuentra definida (?), entonces ejecutala (.), de lo contrario no hagas nada
function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(0);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };

  return (
    // map() recorre el arreglo y genera un elemento por cada dato
    // Las comillas invertidas (` `) permiten combinar texto con expresiones JavaScript usando ${}
    //asi podemos agrega la clase "active" solo al elemento cuyo índice coincide con el seleccionado
    <ul className="list-group">
      {data.map((elemento, i) => (
        // key identifica de forma única cada elemento para que React lo actualice correctamente
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
