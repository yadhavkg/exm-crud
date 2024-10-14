import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    name:{type:String},
    phone:{type:Number},
    age:{type:Number},

})

export default mongoose.Model.users||mongoose.model("user",userSchema)