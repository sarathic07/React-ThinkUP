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

        app.get('/gettodo', function (req, res) {
            console.log(req);
            db.collection('todo').find().toArray((err, document) => {
                if (err) {
                    return console.log(err)
                } else {
                    res.send(document);
                }
            });
        })

        app.post('/addtodo', (req, res) => {
            db.collection('todo').insertMany(
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

        app.put('/completetodo', (req, res) => {
            db.collection('todo').findOneAndUpdate(
                { id: req.body.id },
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

        app.delete('/deletetodo', (req, res) => {
            db.collection('todo').deleteMany(
                req.body,
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

