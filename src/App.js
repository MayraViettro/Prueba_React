import React, { Component } from "react";
import "./style.css";

function A(props){
  return <p>Hola {props.nombre}</p>;
}

function B(props){
  return <p>{props.nombre}: 10</p>;
}

function C(props){
  return props.children;
}

class MiComponenteDeClase extends Component{
  render(){
    return <p>Hola soy de la clase</p>;
  }
}

class Contador extends Component{
  constructor(props){
    super(props);

    this.state = {
      contador: 0
    };
  }

  aumentar = ()=>{ 
    this.setState({
      contador: this.state.contador + 1
    }) 
  }

  render(){
    return (<div>
      <p>{this.state.contador}</p>
      <button onClick={ this.aumentar }>Aumentar</button>
    </div>);
  }
}

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  syncCambios(value,property){
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  submitForm = ()=>{
    console.log(this.state);
  }

  render(){
    return (
      <form>
        <input 
          onChange={ (ev)=>{ this.syncCambios(ev.target.value, 'email') } }
          type="email" 
          value={this.state.email} 
          placeholder="Email" />
        <input 
          onChange={ (ev)=>{ this.syncCambios(ev.target.value, 'password') } }
          type="password" 
          value={this.state.password} 
          placeholder="*****" />
        <div>
          <input 
            onClick={ this.submitForm }
            type="submit" 
            value="Iniciar sesión" />
        </div>
      </form>
    );
  }
}

export default function App() {
  let nombre = "Ariel";
  return (
    <div>
      <div>
        <h1>Prueba de componentes!</h1>
        <A nombre={nombre} />
        <B nombre={nombre} f={()=>{}} />
        <C>
          <p>Hijo 1!</p>
          <p>{2+3*5}</p>
        </C>
        <MiComponenteDeClase />
      </div>
      <p>----------------------------------------</p>
      <div>
        <Contador />
      </div>
      <p>----------------------------------------</p>
      <div>
        <Formulario />
      </div>
    </div>
  );
}

//f es una funcion de javascript, tambien se puede mandar como props