import React from "react";
import { alert, buttons, jumbotron, popover } from 'bootstrap-css'

export default class Grid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <table className="table">
                        <thead>
                            <tr>
                                {
                                    this.props.header.map((head) => {
                                        return (
                                            <th className="table-bordered" key={head}>{head}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody className="table-striped">
                            {
                                this.props.students.map((stud) => {
                                    return (
                                        <tr key={stud.id}>
                                            <td className="table-bordered">{stud.fname}</td>
                                            <td className="table-bordered">{stud.lname}</td>
                                            <td className="table-bordered">{stud.email}</td>
                                            <td className="table-bordered">{stud.mobile}</td>
                                            <td className="table-bordered">
                                                <a href="#" onClick={() => this.props.editStudent(stud.id)}>edit</a>
                                                <a href="#" onClick={() => this.props.deleteStudent(stud.id)}>delete</a>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                        </tbody>
                    </table>
        )
    }
}