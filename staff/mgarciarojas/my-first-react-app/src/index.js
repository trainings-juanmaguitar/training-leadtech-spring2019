import React from 'react';
import ReactDOM from 'react-dom';
// se pueden asignar a variables etiquetas HTML
const b ='marta'
const element = <h1>Hello, world! {b} </h1> // sintaxis JSX, solo puede haber un elemento 
// html por cada elemento JSX, si queremos varios , deben estar dentro de contenedores <div> 

const age = 23

ReactDOM.render( // para poder imprimir los elementos HTML en el DOM
    element, // elemento a insertar
    document.getElementById('root') // donde se va a insertar el elemento
);

//Un componente se puede crear con una funcion o con una clase. La diferencia radicará en
// los componentes creados a través de la función, son stateless, se puede insertar contenido en los atributos
// del elemento HTML . Cuando se crean a través de la clase podrán tener estado (this.state) y acceso al ciclo de vida.
// informacion via atributo = this.props
// el this.state se puede modificar mientras que el this.props no 
const Message = (props) => (<h1>Hello {props.name} </h1>)

//desestructurando
//const Message = ({name}) => (<h1>Hello {name} </h1>)
class Text extends React.Component {
    render(){
    return (
    <div>
        <Message name="juanma"/>
    <p>Norfol Island</p>
        </div>
    )
}
}

// Al hacer el componente via clase para recupera los atributos se recuperan con el this.props

class Text extends React.Component {
    //cuando se renderiza el elemento se ejecutará lo que haya aquí. ( solo cuando es una clase el componente)

    componentDidMount() {

    }


    render(){
    return (
    <div>
        <Message name="juanma"/>
    <p> {this.props.country} </p>
        </div>
    )
}
}

ReactDOM.render (
   <Text country="norfold Island" />
)
// sesion 24

const greeting = name && 'Hello ${name}' // solo si evalua a tre se imprimirá el nombre
const greeting = name || 'juanma' // si name viene vacio se le asigna juanma, igual que default aprameters
