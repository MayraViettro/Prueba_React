import React, { Component } from "react";
import "./style.css";

//Componentes Funcionales
function A(props){
  return <p>Hola {props.nombre}</p>;
}

function B(props){
  return <p>{props.nombre}: 10</p>;
}

function C(props){
  return props.children;
}

//Componentes de Clase
class MiComponenteDeClase extends Component{
  render(){
    return <p>Hola soy de la clase</p>;
  }
}

class Contador extends Component{ //Uso de State y Props
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

class Formulario extends Component{ //Trabajo con Formularios
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

class Frutas extends Component{ //Colecciones
  constructor(props){
    super(props);
    this.state = {
      articulos: [
        'Bananas',
        'Manzanas',
        'Naranjas'
      ]
    }
  }

  render(){
    return (
      <div>
        {
          this.state.articulos.map((titulo)=>{
            return <p>{titulo}</p>
          })
        }
      </div>
    )
  }
}

class Blog extends Component{ //Ajax y Colecciones, Uso de Estilos
  constructor(props){
    super(props);
    this.state = {
      articulos: []
    };
  }

  componentDidMount(){
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

    promesa.then(response => response.json()).then(data=>{
      this.setState({
        articulos: data
      })
    })

    /* OTRA FORMA DE ESCRIBIR MENOS SIMPLIFICADA:

    promesa.then((response)=>{
      response.json().then((data)=>{
        console.log(data);
      })
    });

    */
  }

  render(){
    return (
      <div>
        {
          this.state.articulos.map((articulo)=>{
            return <div className="card" style={ { backgroundColor: 'red', color: 'yellow' } }><p>{articulo.title}</p></div>
          })
        }
      </div>
    )
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
      <p>----------------------------------------</p>
      <div>
        <Frutas />
      </div>
      <p>----------------------------------------</p>
      <div>
        <Blog />
      </div>
      <p>----------------------------------------</p>
      <div>
        
      </div>
    </div>
  );
}

//f es una funcion de javascript, tambien se puede mandar como props