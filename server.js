const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const appointment = require('./routes/api/appointment');
const auth = require('./routes/auth');
const signup = require('./routes/signup');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.all('/api/users/*', verifyToken);
app.use('/api/appointment', appointment);
app.use('/auth', auth);
app.use('/signup', signup);

function verifyToken(req, res, next) {
    const authorization = req.headers['authorization'];
    console.log(authorization);
    if(!authorization) {
      res.json({ code: 2, message: 'Unauthenticated' });
    } else {
      const [, token] = authorization.split(' ');
      jwt.verify(token, KEY, (err, decoded) => {
        if(err) {
          res.json({ code: 2, message: 'Unauthenticated' });
        }
        req.user = decoded;
        next();
      });
    }
    
}

//app.all('/api/*', verifyToken)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));