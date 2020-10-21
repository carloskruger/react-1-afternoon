import React, {Component} from "react";

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }

    }
    handleChange1(value){this.setState({ number1: parseInt(value, 10) })}
    handleChange2(value){this.setState({ number2: parseInt(value, 10) })}
    calculateSum(value1, value2){
        let sum = this.state.number1 + this.state.number2
        this.setState({sum: sum})
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
               
                <input className="inputLine" onChange={ (e) => this.handleChange1(e.target.value) }/>
                <input className="inputLine" onChange={ (e) => this.handleChange2(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.calculateSum(this.state.number1, this.state.number2) }>Calculate Sum</button>
                <span className="resultsBox">{ this.state.sum }</span>
            </div>
        )
    }
}

export default Sum;