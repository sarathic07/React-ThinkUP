import React from "react";

export default class StarSection extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        let starCount = this.props.starCount;
        let stars = [];
        for(let i=0; i < starCount; i++){
            stars.push(
                <span key={i} className="glyphicon glyphicon-star"></span>
            )
        }

        return (
            <div id="star-section">
                <div className="well">
                    {stars}
                </div>
            </div>
        )
    }
}