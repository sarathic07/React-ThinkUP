import React from "react";
import AddModel from "../components/AddModel";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as StudActions from "../actions/studentActions";
import Grid from "../components/Grid";
import { alert, buttons, jumbotron, popover } from 'bootstrap-css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: ["fname", "lname", "e-mail", "mobile", "action"],
            openModel: false,
            editData: {}

        }
    }
    componentDidMount() {
        this.props.StudActions.GetStudent();
    }
    getStudents() {
        this.setState({students: studentStore.getStudents()})
    }
    toggleModel() {
        this.setState({ openModel: !this.state.openModel })
    }
    onSave(data) {
        let newStudent = [];
        let oldStudent = this.props.students;
        let editStudent = oldStudent.filter((stud) => stud.sid == data.sid);

        if (editStudent.length) { //edit
            this.props.StudActions.EditStudent(data);
        } else { //save
            this.props.StudActions.AddStudent(data);
        }
        this.setState({
            students: newStudent,
            editData: {}
        })
        this.toggleModel();
    }
    editStudent(sid) {
        let editData = this.props.students.filter((stud) => stud.sid == sid);
        this.setState({ editData: editData[0] })
        this.toggleModel();

    }
    deleteStudent(sid) {
        this.props.StudActions.DeleteStudent(sid);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>
                    <h2 style={{ display: "inline-block", padding: "20px" }}>Student Information</h2>
                    <button onClick={this.toggleModel.bind(this)} className="btn btn-lg btn-primary" style={{ float: "right", margin: "13px", marginRight: "60px" }}>Add New</button>
                </div>
                <div className="table-responsive">
                    <Grid
                        header={this.state.header}
                        students={this.props.students}
                        editStudent={this.editStudent.bind(this)}
                        deleteStudent={this.deleteStudent.bind(this)} />
                </div>
                <AddModel
                    openModel={this.state.openModel}
                    toggleModel={this.toggleModel.bind(this)}
                    editData={this.state.editData}
                    onSave={this.onSave.bind(this)} />
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        students: state.stud
    };
}


function mapDispatchToProps(dispatch) {
    return {
        StudActions: bindActionCreators(StudActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);