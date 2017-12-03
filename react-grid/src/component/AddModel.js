import React from "react";
import _ from "lodash";

export default class AddModel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            fname: _.isEmpty(props.editData)?"":props.editData.fname,
            lname: _.isEmpty(props.editData)?"":props.editData.lname,
            email: _.isEmpty(props.editData)?"":props.editData.email,
            mobile: _.isEmpty(props.editData)?"":props.editData.mobile
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            fname: _.isEmpty(nextProps.editData)?"":nextProps.editData.fname,
            lname: _.isEmpty(nextProps.editData)?"":nextProps.editData.lname,
            email: _.isEmpty(nextProps.editData)?"":nextProps.editData.email,
            mobile: _.isEmpty(nextProps.editData)?"":nextProps.editData.mobile
        })
    }
    updateText(type, event) {
        this.setState({[type]: event.target.value})
        // switch(type){
        //     case "fname" :
        //         this.setState({fname: event.target.value})
        //         break;
        //     case "lname" :
        //         this.setState({lname: event.target.value})
        //         break;
        //     case "email" :
        //         this.setState({email: event.target.value})
        //         break;
        //     case "mobile" :
        //         this.setState({mobile: event.target.value})
        //         break;
        //     case "default" :
        //         break;
        // }
    }
    onSave(){
        let data = {
            id: _.isEmpty(this.props.editData)?Math.random():this.props.editData.id,
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.onSave(data);
        this.reset();
    }
    reset(){
        this.setState({
            fname: "",
            lname: "",
            email: "",
            mobile: ""
        })
    }
    render() {
        return (
            <div className={this.props.openModel ? "modal fade in" : "modal fade"} style={{ display: this.props.openModel ? "block" : "none", opacity: "1" }}>
                <div className="modal-dialog" style={{ marginTop: "25%" }}>
                    <div className="modal-content">
                        <div className="modal-header" style={{ display: "block" }}>
                            <button onClick={() => this.props.toggleModel()} type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add Student</h4>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <span className="input-group-addon">First Name :</span>
                                <input value={this.state.fname} onChange={this.updateText.bind(this, "fname")} id="msg" type="text" className="form-control" name="msg" placeholder="First Name" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">Last Name :</span>
                                <input value={this.state.lname} onChange={this.updateText.bind(this, "lname")} id="msg" type="text" className="form-control" name="msg" placeholder="Last Name" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">Email :</span>
                                <input value={this.state.email} onChange={this.updateText.bind(this, "email")} id="msg" type="text" className="form-control" name="msg" placeholder="eg. - sara@gmail.com" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">Mobile :</span>
                                <input value={this.state.mobile} onChange={this.updateText.bind(this, "mobile")} id="msg" type="text" className="form-control" name="msg" placeholder="eg. - 8987456321" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={this.onSave.bind(this)} type="button" className="btn btn-default" data-dismiss="modal">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}