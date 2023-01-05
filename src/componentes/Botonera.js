import './Contenedor.css';
import {Boton} from './Boton';
import data from '../json/task.json';
//   console.log(data);  
export function Botonera({clickHandler}) {
  const handleClick = nombreDeBoton => clickHandler(nombreDeBoton);
    return (
        <div className="botonera">    
          {data.map( teclas=>
         <Boton name={teclas.tecla}
         key={teclas.tecla} clickHandler={handleClick}
         /> 
          )}
        </div>
      //    <div className="botonera">    
      //    {data.map( teclas=>
      //   <Boton 
      //   tecla={teclas.tecla}
      //   key={teclas.tecla}
      //   /> 
      //    )}
      //  </div>
    );
}