const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const courseCollection =require('./data/productCollection.json');
const courses = require('./data/course.json');


app.get('/', (req, res) => {
    res.send('News API Running');
});
app.get('/allCourses', (req, res) => {
    res.send(courseCollection)
});


app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})
