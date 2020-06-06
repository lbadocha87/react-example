import React, {Component} from 'react';


class ClassExample extends Component {


    constructor() {
        super();
        this.state = {
            buttonText: 'To jest tekst buttona',
            buttonClass: ''
        }
    }


    changeText = () => {
        this.setState({buttonText: 'Zmieniłem tekst'});
    }

    componentDidMount() {
        console.log('działa metoda po zamontowaniu');
        this.setState({buttonClass: 'bg-blue'});
    }

    componentDidUpdate() {
        console.log('komponent zaktualizowany');
    }

    componentWillUnmount() {
        console.log('Cześć znikam');
    }

    render() {
        return <button className={this.state.buttonClass} onClick={this.changeText}>{this.state.buttonText}</button>;
    }
    
}

export default ClassExample;