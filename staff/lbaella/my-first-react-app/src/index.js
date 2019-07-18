import React from 'react';
import ReactDOM from 'react-dom';

/*
const name = `Laura`;
//const element = <h1>Hello, {name}</h1>;

const element = (
    <h1>
        Hello, {name}
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
*/


/*
function Welcome(props) {
 console.log(props);
 return <h1>Hello, {props.name}</h1>;
}

const Welcome = (props) => {
 console.log(props);
 return <h1>Hello, {props.name}</h1>;
}

const Welcome = ({name}) => {
 console.log(name);
 return <h1>Hello, {name}</h1>;
}

*/

// El componente se puede crear como una función o como una classe, la classe nos ayuda para los ciclos de vida y los estados
const Message = ({name}) => ( <h1>Helloo, {name}</h1>)

class Text extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()}

    }
    render() {
        return(
            <div>
                <Message name="Juanma"/>
                <p>{this.props.country}</p>
                <p>{this.state.date.toLocaleDateString()}</p>
            </div>
        )
    }
}


const Welcome = ({name}) => <h1>Helloo, {name}</h1>;


ReactDOM.render(
    //<Welcome name="Laura" />,
    <Text country="Spain" />,
    document.getElementById('root')
);

