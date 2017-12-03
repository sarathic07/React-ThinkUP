import React from "react";
import AddModel from "./AddModel";
import Grid from "./Grid";
import { alert, buttons, jumbotron, popover } from 'bootstrap-css'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: ["fname", "lname", "e-mail", "mobile", "action"],
            students: [{
                id: Math.random(),
                fname: "sara",
                lname: "kumar",
                email: "sara@gmail.com",
                mobile: "9874563210"
            },
            {
                id: Math.random(),
                fname: "sara1",
                lname: "kumar1",
                email: "sara1@gmail.com",
                mobile: "9874563216"
            }],
            openModel: false,
            editData: {}

        }
    }
    toggleModel() {
        this.setState({ openModel: !this.state.openModel })
    }
    onSave(data) {
        let newStudent = [];
        let oldStudent = this.state.students;
        let editStudent = oldStudent.filter((stud) => stud.id == data.id);

        if (editStudent.length) { //edit
            newStudent = oldStudent.map((stud) => {
                if (stud.id == data.id) {
                    return {
                        id: data.id,
                        fname: data.fname,
                        lname: data.lname,
                        email: data.email,
                        mobile: data.mobile
                    }
                } else {
                    return stud
                }
            })

        } else { //save
            newStudent = [data, ...oldStudent];
        }
        this.setState({
            students: newStudent,
            editData: {}
        })
        this.toggleModel();
    }
    editStudent(id) {
        let editData = this.state.students.filter((stud) => stud.id == id);
        this.setState({ editData: editData[0] })
        this.toggleModel();

    }
    deleteStudent(id) {
        let oldStudent = this.state.students;
        let newStudent = oldStudent.filter((stud) => stud.id != id);
        this.setState({ students: newStudent })
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