//con interfaces declaramos el tipo de dato que se espera recibir en las props del componente, 
// esto nos ayuda a evitar errores y a tener un código más legible y mantenible. 

import type { ReactNode } from "react";

// En este caso, la interfaz Props define que el componente Card espera recibir una prop llamada body de tipo string.
interface Props {
  children: ReactNode;
}

function Card(props: Props){
  
  const {children} = props;
  return (
    //definimos el estilo del componente utilizando la propiedad style, 
    // que recibe un objeto con las propiedades CSS que queremos aplicar al componente. 
    // En este caso, estamos definiendo un ancho de 350px para la tarjeta.
    <div 
      className="card" 
      style={{
        width : "350px"
      }}
    >
      <div className="card-body"> {children} </div>
    </div>
  );
}

interface CardBodyProps {
  //el sinbolo de pregunta (?) indica que la prop es opcional, 
  // es decir, que el componente puede recibirla o no.
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps){
    // En este caso, la interfaz CardBodyProps define que el componente CardBody 
    // espera recibir dos props: title y text, ambas de tipo string.
    const {title, text} = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {text}
      </p>
    </>
  );
}

export default Card;