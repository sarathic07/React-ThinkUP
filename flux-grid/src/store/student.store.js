import flux from "fluxify";
import request from "superagent";

let studentStore = flux.createStore({
    id: "studentStore",
    initialState: {
        students: [],
        getStudents: function () {
            return studentStore.students;
        }
    },
    actionCallbacks: {
        getStudentData: function (updater, event) {
            request.get("/getstudent")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send()
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        updater.set({ students: res.body });
                    }
                })
        },
        postStudentData: function (updater, event, studentInfo) {
            request.post("/addstudent")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send(studentInfo)
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        let oldStudents = studentStore.students;
                        let newStudents = oldStudents.concat(res.body[0]);
                        updater.set({ students: newStudents });
                    }
                })
        },
        putStudentData: function (updater, event, studentInfo) {
            request.put("/editstudent")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send(studentInfo)
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        let newStudents = studentStore.students.map((stud) => {
                            if (stud.sid == res.body.sid) {
                                return {
                                    sid: res.body.sid,
                                    fname: res.body.fname,
                                    lname: res.body.lname,
                                    email: res.body.email,
                                    mobile: res.body.mobile
                                }
                            } else {
                                return stud;
                            }

                        })

                        updater.set({ students: newStudents });
                    }
                })
        },
        deleteStudentData: function (updater, event, studentInfo) {
            request.delete("/deletestudent")
                .set("accept-language", "en-us,en;q=0.5")
                .set('accept', 'application/json')
                .send(studentInfo)
                .end((err, res) => {
                    console.log(res);
                    if (!err && res.statusCode == 200) {
                        let newStudents = studentStore.students.filter((stud) => stud.sid != studentInfo.sid);
                        updater.set({ students: newStudents });
                    }
                })
        },
    }
})

export default studentStore;
