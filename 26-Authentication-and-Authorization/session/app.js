const express = require('express');
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const app = express();
const PORT = 3000;

const myusername = 'user1'
const mypassword = 'mypassword'

const oneMinute = 1000*60;

//session middleware
app.use(sessions({
    secret: "secretnihwoyhehehehehe-v-^_^",
    saveUninitialized:true,
    cookie: { maxAge: oneMinute },
    resave: false
}));
//parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//serving public file
app.use(express.static('views'))
//cookie parser middleware
app.use(cookieParser())

app.get('/',(req,res)=>{
    session = req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>")
    }else{
        res.sendFile('views/index.html',{root:_views})
    }
})

app.post('/user',(req,res)=>{
    if(req.body.username == myusername && req.body.password == mypassword){
        session = req.session;
        session.userid = req.body.username;
        console.log(req.session)
        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`)
    }else{
        res.send(`Unauthenticated User`)
    }
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

//listening port
app.listen(PORT,() => {
    console.log("listen on port 3000")
})




