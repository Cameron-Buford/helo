require('dotenv').config()
const express= require('express')
const session= require('express-session')
const massive = require('massive')
const cors = require('cors')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING}= process.env
const app = express()
//redux
// redux-react
// redux-promise-middleware
//bcryptjs
//axios
//react-router-dom

const ctrl = require('./controller')


app.use(cors())
app.use(express.json())


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}))


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
    app.listen(SERVER_PORT, () => 
    console.log(`server is raiding ports at ${SERVER_PORT}`))
}).catch(err => console.log(err))



const authCtrl = require('./controller')
// const userUrl = '/api/user'

//endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

