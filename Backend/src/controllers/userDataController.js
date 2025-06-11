const prisma = require('../../DataBase/prisma')
const AllUsers = async(req,res)=>{
    try{
        const students = await prisma.student.findMany()
        const headers = Object.keys(students[0])        
        console.log({headers})
        res.status(200).json({students,headers})
    }
    catch (error){
        console.error(error)
        res.status(500).json({msg:"Server error"})
    }
}

const SingleUser = async()=>{

}
module.exports = {
    AllUsers
}