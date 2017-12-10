const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

var url = 'mongodb://127.0.0.1:27017/StudentDB';

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(url, (err, db) => {
    if (err) return console.log(err);

    app.listen(3000, function () {
        console.log('listening on 3000');

        app.get('/', function (req, res) {
            res.sendFile(__dirname + '/dist/index.html')
        })

        app.get('/getstudent', function (req, res) {
            db.collection('student').find().toArray((err, document) => {
                if (err) {
                    return console.log(err)
                } else {
                    res.send(document);
                }
            });
        })

        app.post('/addstudent', (req, res) => {
            db.collection('student').insertMany(
                [req.body],
                (err, document) => {
                    if (err) {
                        return console.log(err)
                    } else {
                        res.send(document.ops);
                    }
                }
            )
        })

        app.put('/editstudent', (req, res) => {
            db.collection('student').findOneAndUpdate(
                { sid: req.body.sid },
                { $set: req.body },
                (err, document) => {
                    if (err) {
                        return console.log(err);
                    } else {
                        db.collection('student').findOne({sid: req.body.sid}, function(err, found){
                            res.send(found); // --> 'Jerry' - value was actually updated in DB
                        })
                    }
                }
            )
        })

        app.delete('/deletestudent', (req, res) => {
            db.collection('student').remove(
                req.body ,
                (err, document) => {
                    if (err) {
                        return console.log(err);
                    } else {
                        res.send(document);
                    }
                }
            )
        });

    })
})

