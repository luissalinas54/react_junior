type Props = {
  data: string[];
};

//funcion que al dar click en un elemento de la lista, muestra el valor en consola
function List({ data }: Props) {
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    // map() recorre el arreglo y genera un elemento por cada dato
    <ul className="list-group">
      {data.map((elemento) => (
        // key identifica de forma única cada elemento para que React lo actualice correctamente
        <li
          onClick={() => handleClick(elemento)}
          key={elemento}
          className="list-group-item"
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
