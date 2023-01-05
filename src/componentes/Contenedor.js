import './Contenedor.css';
import { Component } from 'react';
import {Botonera} from './Botonera';
import {Pantalla} from './Pantalla';
import operaciones from "../logic/operaciones"
class Contenedor extends Component{
    
  state = {
    total:null,
    siguiente:null,
    operador:null
  }

  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))
  render(){
  return (
          <div className="contenedor">
            <Pantalla value={this.state.siguiente || this.state.total || "0"}/>
           {/* es handler */}
           <Botonera clickHandler={this.handleClick}/>
        </div>
    );
}
}
export default Contenedor;
