const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    fullName:{
        type: String, 
        required: true,
    },
    userName: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    password: {
        type: String, 
        required: true,
    },
})




module.export= mongoose.model("Users", userSchema)