const mongoose = require('mongoose');
var schema = new mongoose.Schema({ url: 'string', title: 'string' });
var Video = mongoose.model('Video', schema);

// connect db
// mongoose.connect(
//     'mongodb+srv://iqbalforall%40gmail.com:Faaiza%40786@cluster0-btjjz.gcp.mongodb.net/admin?retryWrites=true&w=majority'
//     , { useNewUrlParser: true })
// .catch(function(error){ console.log(error)});

mongoose.connect('mongodb://localhost:27022/micro_video', {useNewUrlParser: true})
.catch(function(error){ console.log(error)});


Video.find(
    { "title": /Introduction/i }, 
    function(err,docs) { 
        console.log(docs);
    }
);