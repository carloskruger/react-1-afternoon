import React, {Component} from "react";

class FilterObject extends Component {


 constructor(){
    super();
    this.state = {
        countries: [
          {
            country: 'USA',
            language: "English",
          },
          {
            country: 'Italy',
            capital: "Rome",
          },
          {
            country: 'Spain',
            capital: 'Madrid',
            language: 'Spanish'
          }
        ],
  
        userInput: '',
        filteredCountries: []
      }
    }
    
      handleChange(val) {
        this.setState({ userInput: val });
      }
        
      filterCountries(prop) {
        let countries = this.state.countries;
        let filteredCountries = [];
    
        for ( let i = 0; i < countries.length; i++ ) {
          if ( countries[i].hasOwnProperty(prop) ) {
            filteredCountries.push(countries[i]);
          }
        }
    
        this.setState({ filteredCountries: filteredCountries });
      }
    
      render(){
    return(
        <div className="puzzleBox filterObjectPB">
<h4> Filter Object </h4>
<span className="puzzleText">Original: { JSON.stringify(this.state.countries, null, 10) }</span>
<input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
<button className="confirmationButton" onClick={ () => this.filterCountries(this.state.userInput) }>Filter</button>
<span className="resultsBox filterObjectRB">{ JSON.stringify(this.state.filteredCountries, null, 10) }</span>
        </div>
    )
}

}

export default FilterObject;