import './Contenedor.css';


export function Pantalla({value}) {
    return (
        <div className="pantalla" >
              <div>{value}</div>
        </div>
    );
}