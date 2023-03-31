const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = 'mongodb+srv://fredycerna:evRRGMbSit7Ksl2T@cluster0.z016suo.mongodb.net/?retryWrites=true&w=majority';
const port = process.env.PORT || 3000;

mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

const newUser = new User({name: 'fredy', password: 'P@ssw0rd!'});

newUser.save()
    .then(() => console.log('Record saved to database'))
    .catch(err => console.error(err));


app.get('/', (req, res) => {
    res.send('Welcome to my game app');
});

app.listen(port, () => console.log('Server listening on port 3000'));