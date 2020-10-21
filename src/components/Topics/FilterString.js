import React, {Component} from "react";

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: ["volkswagen", "toyota", "ford", "nissan", "audi", "volvo"],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
        
    filterString(prop) {
        let cars = this.state.unFilteredArray;
        let filteredArray = [];
    
        for ( let i = 0; i < cars.length; i++ ) {
          if ( cars[i].includes(prop) ) {
            filteredArray.push(cars[i]);
          }
        }
    
        this.setState({ filteredArray: filteredArray });
      }


    render(){

        return(
            
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{ JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                
                <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">{ JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString;