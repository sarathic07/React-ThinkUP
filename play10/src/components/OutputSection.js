import React from "react";

export default class OutputSection extends React.Component {
    render () {
        return (
            <div id="output-section">
                <div className="well">
                    {this.props.selectedNumbers.map((value, index)=> {
                        return(
                            <span
                                key={index}
                                className="number selected-false used-false"
                                onClick={this.props.unSelectNumber.bind(this,index)} >
                                {value}</span>
                            )
                    })}
                </div>
            </div>
        )
    }
}