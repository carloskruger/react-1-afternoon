import React, {Component} from "react";

class Palindrome extends Component {
        constructor(){
            super();
            this.state = {
                userInput: "",
                palindrome: ""
            }
        }

        handleChange(val) {
            this.setState({ userInput: val });
          }
            
        isPalindrome(userInput){
            let thisStr = userInput;
            let thisArr = thisStr.split('');
            console.log("thisArr", thisArr)
            let reverArr = thisArr.reverse();
            console.log("reverArr",reverArr)
            let reverStr = reverArr.join('');
            console.log("reverStr ", reverStr)
            if (reverStr === userInput){
                this.setState({ palindrome: 'true' });
            } 
            else {
            this.setState({ palindrome: 'false' });
            }
            }


   
        render(){
        return(
            
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }>
                </input>
                <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }>
Is this a Palindrome?
                </button>
                <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>

            </div>
        )
    }
}

export default Palindrome;