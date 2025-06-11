require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const authRouter = require('./src/routes/authRoutes')
const userDataRouter = require('./src/routes/userDataRoutes')

//Middlewares
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})



//routes
app.use(authRouter)
app.use(userDataRouter)


//Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server running on port",process.env.PORT)
})


