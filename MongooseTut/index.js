const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Yash', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!");
});

const kittySchema = new mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('yashkitty', kittySchema);

var yashkitty = new Kitten({ name: 'yashKitty' });
console.log(yashkitty.name); // 'Silence'

kittySchema.methods.speak = function() {
    var greeting = this.name
    console.log(greeting);
}

yashkitty.save(function(err, yashkitty) {
    if (err) return console.error(err);
    //yashkitty.speak();
});