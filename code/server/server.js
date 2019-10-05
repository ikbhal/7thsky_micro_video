// express
const express = require('express');
const app = express();
const http = require('http').Server(app);

const mongoose = require('mongoose');
var schema = new mongoose.Schema({ url: 'string', title: 'string' });
var Video = mongoose.model('Video', schema);

// mongoose.connect(
//     'mongodb+srv://iqbalforall%40gmail.com:Faaiza%40786@cluster0-btjjz.gcp.mongodb.net/admin?retryWrites=true&w=majority')
// .catch(function(error){ console.log(error)});
mongoose.connect('mongodb://localhost:27022/micro_video', {useNewUrlParser: true});
app.use(express.json());

app.get('/ping', function(req, res){
    res.send("pong");
});

// delete all videos 

app.delete('/videos', function(req, res) {
    Video.deleteMany({}, function(){
        res.json({messsage: "deleted successful"});
    });
});
// create video

app.post('/videos', function(req, res) {
    var video = req.body;
    console.log("video:" + video);
    Video.create(video, function (err, doc) {
        if (err) 
          res.json(err)
        else 
          res.json(doc);
      });
});

// search videos
//http://localhost:3000/videos?q=Introduction

app.get('/videos', function(req, res){
    
    var q = req.query.q;
    if(!q) {
        Video.find({}, function (err, users) {
            if(err)
                res.json(err);
            else 
                res.json(users);
        });
    } else {
        Video.find(
            { "title": { "$regex": q, "$options": "i" }}, 
            function(err,docs) { 
                console.log("error" + err);
                console.log(docs);
                if(err) {
                    res.json(err);
                } else {
                    res.json(docs);
                }
            }
        );
    }
});


app.use(express.static("../public"));
const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});