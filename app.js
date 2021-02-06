const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const port = 5000;
const hostname = 'localhost';
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const indexRouter = require('./routes/index')
const subjectRouter = require('./routes/subject')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}));
app.use(methodOverride('_method'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stic', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to the Database'));

app.use('/', indexRouter)
app.use('/subject', subjectRouter)

app.listen(port,hostname, () => { console.log(`Server running at http://${hostname}:${port}/`);});