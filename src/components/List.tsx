type Props = {
  data : string[]
}

function List({data}: Props) {
  return (
    <ul className="list-group">
      // map() recorre el arreglo y genera un elemento por cada dato
      {data.map((elemento) => (
        // key identifica de forma única cada elemento para que React lo actualice correctamente
        <li key = {elemento} className="list-group-item">{elemento}</li>
      ))}
    </ul>
  );
}

export default List