import './Contenedor.css';


export function Boton({clickHandler, name}) {
    const handleClick = () => clickHandler(name)
    return (
    
    <button className="boton"  onClick={handleClick}>{name}</button>
    
    );
}

// export function Boton(props) {
//     return (
//         <div className="boton">
//         {props.tecla}
//         </div>
//     );
// }