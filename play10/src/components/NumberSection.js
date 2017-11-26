import React from "react";

export default class NumberSection extends React.Component {
    constructor (props){
        super(props);
        this.state={

        }
    }
    selectNumber(number){
        this.props.selectNumber(number);
    }

    render () {
        let numbers = [];
        for(let i = 1; i < 10 ; i++){
            let cname = "number ";
            cname += (this.props.selectedNumbers.indexOf(i) == -1)?"selected-false":"selected-true";
            cname += (this.props.usedNumbers.indexOf(i) == -1)?" used-false":" used-true";
            numbers.push(
                <span
                    key={i}
                    className={cname}
                    onClick={this.selectNumber.bind(this,i)} >
                    {i}</span>
            )
        }
        return (
            <div id="number-section">
                {(this.props.doneStatus != "")?
                    <div className="well">
                        {this.props.doneStatus}
                    </div>
                :
                <div className="well">
                    {numbers}
                </div>
                }
            </div>
        )
    }
}