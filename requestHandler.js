import userSchema from "./models/user.model.js"

export async function addBook(req,res){
    try {
        const {name,phone,age}=req.body
        console.log(req.body);
    
        if(!(name&&phone&&age))
            return res.status(404).send({msg:"fields are empty"})
        let checkPhn=await userSchema.findOne({phone})
        if(!checkPhn){
            userSchema.create({name,phone,age}).then((data)=>{
                res.status(201).send({msg:data})            
            }).catch((error)=>{
                res.status(404).send({msg:error})            
    
            })

        }
        else{
            res.status(404).send({msg:"Phone Number Already Exist"})    

        }  
        
    } catch (error) {
        res.status(404).send({msg:"error"})            

        
        
    }


    
}

// getbook
export async function getBook(req,res){
    try {
        const books=await userSchema.find();
        console.log(books);
        res.status(200).send({books})
        
    } catch (error) {
        res.status(404).send({msg:error})
        
    }

}

// getbooks
export async function getBooks(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        const data=await userSchema.findOne({_id})
        res.status(200).send(data);
        
    } catch (error) {
        return res.status(404).send({msg:error})
        
    }
}
