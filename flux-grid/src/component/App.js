import React from "react";
import AddModel from "./AddModel";
import Grid from "./Grid";
import studentStore from "../store/student.store";
import flux from "fluxify";
import { alert, buttons, jumbotron, popover } from 'bootstrap-css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: ["fname", "lname", "e-mail", "mobile", "action"],
            students: [],
            openModel: false,
            editData: {}

        }
    }
    componentDidMount() {
        flux.doAction("getStudentData", this);
        studentStore.on("change:students", this.getStudents.bind(this));
    }
    componentWillUnmount() {
        studentStore.off("change:students", this.getStudents.bind(this));
    }
    getStudents() {
        this.setState({students: studentStore.getStudents()})
    }
    toggleModel() {
        this.setState({ openModel: !this.state.openModel })
    }
    onSave(data) {
        let newStudent = [];
        let oldStudent = this.state.students;
        let editStudent = oldStudent.filter((stud) => stud.sid == data.sid);

        if (editStudent.length) { //edit
            flux.doAction("putStudentData", this, data);
        } else { //save
            flux.doAction("postStudentData", this, data);
        }
        this.setState({
            students: newStudent,
            editData: {}
        })
        this.toggleModel();
    }
    editStudent(sid) {
        let editData = this.state.students.filter((stud) => stud.sid == sid);
        this.setState({ editData: editData[0] })
        this.toggleModel();

    }
    deleteStudent(sid) {
        flux.doAction("deleteStudentData", this, {sid});
    }
    render() {
        return (
            <div>
                <div>
                    <h2 style={{ display: "inline-block", padding: "20px" }}>Student Information</h2>
                    <button onClick={this.toggleModel.bind(this)} className="btn btn-lg btn-primary" style={{ float: "right", margin: "13px", marginRight: "60px" }}>Add New</button>
                </div>
                <div className="table-responsive">
                    <Grid
                        header={this.state.header}
                        students={this.state.students}
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