const express = require('express');
const session = require('express-session');


const TWO_HOURS = 1000 * 60 * 2;

const {
    PORT = 3000,
    NODE_ENV = 'development',
    SESS_NAME = 'sid',
    SESS_SECRET = 'MikaSecret',
    SESS_LIFETIME = TWO_HOURS
} = process.env;

const IN_PROD = NODE_ENV === 'production';

const app = express();

app.use(session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}));

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome</h1>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    `);
});


app.get('/login', (req, res) => {
    res.send('login');
});

app.get('/register', (req, res) => {

});

app.post('/login', (req, res) => {
    
});

app.post('/register', (req, res) => {

});

app.get('/home', (req, res) => {

});

app.post('/logout', (req, res) => {

})

app.listen(PORT, () => console.log(
    `http://localhost:${PORT}`
));