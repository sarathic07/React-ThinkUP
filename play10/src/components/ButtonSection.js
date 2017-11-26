import React from "react";

export default class ButtonSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        let {selectedNumbers, isCorrect, lifeCount, validateAnswer, acceptAnswer, retry} = this.props;
        let disabled = selectedNumbers.length == 0
        let lifeDisabled = (lifeCount == 0)
        let button = <button onClick={validateAnswer.bind(this)} className="btn btn-lg btn-primary" disabled={disabled}>=</button>

        if(isCorrect == true){
           button = <button onClick={acceptAnswer.bind(this)} className="btn btn-lg btn-success" disabled={disabled}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button> 
        }else if(isCorrect == false){
            button = <button className="btn btn-lg btn-danger" disabled={disabled}>
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
        }

        return (
            <div id="button-section">
                {button}
                <br/><br/>
                <button onClick={retry.bind(this)} disabled={lifeDisabled} className="btn btn-warning btn-xs"><span className="glyphicon glyphicon-refresh">{lifeCount}</span>
                </button>
            </div>
            )
    }
}