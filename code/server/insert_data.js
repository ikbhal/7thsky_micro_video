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

// crate video
var videos = [
{
title : "JavaScript Introduction Tutorial in Hindi / Urdu",
url : "https://www.youtube.com/watch?v=Lgxgm-T9cgA&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf&index=1" 
},
{
title : "JavaScript Implementation Tutorial in Hindi / Urdu",
url : "https://www.youtube.com/watch?v=C7Pf2gTfgP0&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf&index=2"
},
{
title : "Add Html Tags in JavaScript Tutorial in Hindi / Urdu",    
url: "https://www.youtube.com/watch?v=ZEMvZZdbBZM&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf&index=3"
}
];
console.log(videos);

Video.insertMany(videos, function(error, docs) {
    console.log("db return : " + docs);
});
