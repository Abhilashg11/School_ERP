const prisma = require('../../DataBase/prisma')
// const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
// const emailTransporter = nodemailer.createTransport({
//     service:'gamil',
//     auth:{
//         user:'alexrog'
//     }
// })

const Register = async(req,res) =>{
    const { name,email,password} = req.body
    
    try {
    
    const existingUser = await prisma.Student.findUnique({where:{email}})

    if (existingUser) return res.status(400).json({msg:"user already exists"})

    const emailToken = jwt.sign({
        email:email
    },'1234',{expiresIn:'1h'})

    // const verificationUrl = 



    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.Student.create({
        data:{name,email,password:hashedPassword}
    })

    res.json({msg:'Registered'})
        
    }catch (error){
        console.error({error})
        res.status(500).json({msg:'server error'})

    }
}

const Login = async(req,res) =>{
    const {email,password} = req.body
    console.log("req=============",req.body)
    const existingUser = await prisma.Student.findUnique({
        where:{email}
    })

    if(!existingUser){
        res.json({msg:'user does not exist'})
    }

    const isPasswordValid = await bcrypt.compare(password,existingUser.password)

    if(!isPasswordValid){
        return res.status(401).json({msg:"invalid password"})
    }

    res.json({msg:"Logged In"})
     
    
    
}

module.exports = {
    Login,Register
}