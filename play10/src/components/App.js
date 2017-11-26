import React from "react";
import StarSection from "./StarSection";
import ButtonSection from "./ButtonSection";
import NumberSection from "./NumberSection";
import OutputSection from "./OutputSection";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            starCount : this.randomNumber(),
            usedNumbers : [],
            selectedNumbers: [],
            isCorrect: null,
            lifeCount: 5,
            doneStatus: ""
        }
    }
    randomNumber() {
        return Math.floor(Math.random() * 9) + 1
    }
    selectNumber(number){
        let selectedNumbers = this.state.selectedNumbers;
        if(this.state.usedNumbers.indexOf(number) == -1 && this.state.selectedNumbers.indexOf(number) == -1){
            selectedNumbers.push(number);
            this.setState({selectedNumbers});
        }
    }
    unSelectNumber(index){
        let selectedNumbers = this.state.selectedNumbers;
        selectedNumbers.splice(index, 1);
        this.setState({selectedNumbers});
    }
    validateAnswer() {
        let total = this.state.selectedNumbers.reduce((sum,arrVal) => sum + arrVal);
        if(this.state.starCount == total){
            this.setState({isCorrect: true})
        }else{
           this.setState({isCorrect: false}) 
        }
    }
    acceptAnswer(){
        let selectedNumbers = this.state.selectedNumbers;
        this.setState({
            isCorrect: null,
            starCount : this.randomNumber(),
            usedNumbers: this.state.usedNumbers.concat(selectedNumbers),
            selectedNumbers: []
        })
    }
    retry(){
        this.setState({
            lifeCount: this.state.lifeCount - 1,
            selectedNumbers: [],
            starCount : this.randomNumber(),
            isCorrect: null
        },this.chkPossibleSoln())
    }
    chkPossibleSoln() {
        let possibleNum = [1,2,3,4,5,6,7,8,9];
        if(this.state.lifeCount == 0){
            let starCount = this.state.starCount;
            let availNumbers = possibleNum.filter((val) => !this.state.usedNumbers.includes(val))
            let total = availNumbers.reduce((sum,arrVal) => sum + arrVal);
            if(this.state.starCount != total && !availNumbers.include(starCount)){
                this.setState({doneStatus: "Game Over!"})
            }
        }
    }
    render() {
        return (
            <div>
                <h2>Play 9 Game</h2>
                <hr />
                <div className="clearfix">
                    <StarSection starCount={this.state.starCount}/>
                    <ButtonSection 
                        selectedNumbers={this.state.selectedNumbers}
                        isCorrect={this.state.isCorrect}
                        lifeCount={this.state.lifeCount}
                        validateAnswer={this.validateAnswer.bind(this)}
                        acceptAnswer={this.acceptAnswer.bind(this)}
                        retry={this.retry.bind(this)}
                    />
                    <OutputSection 
                        selectedNumbers={this.state.selectedNumbers}
                        unSelectNumber={this.unSelectNumber.bind(this)}
                    />
                </div>
                <NumberSection 
                    usedNumbers={this.state.usedNumbers}
                    doneStatus= {this.state.doneStatus}
                    selectedNumbers={this.state.selectedNumbers}
                    selectNumber={this.selectNumber.bind(this)}
                    />
            </div>
        )
    }
}