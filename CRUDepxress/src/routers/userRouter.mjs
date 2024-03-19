import { Router, request, response } from "express";
import { checkSchema, matchedData, validationResult } from "express-validator";
import { validateaddress, validateuser } from "../utils/validationSchemas.mjs";
import { addressmodel, usermodel } from "../Database/usermodel.mjs";
import { upload } from "../utils/middlewares.mjs";

export const userRouter=Router()


userRouter.post('/api/user',upload.single('file'),checkSchema(validateuser) ,async (request,res)=>{
  
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //generating the image url
    // const imageURL = `${request.protocol}://${request.get('host')}/images/${request.file.filename}`;
    const userData = request.body;
    const newUser = new usermodel(userData);
    // newUser.imageurl=imageURL
    const savedUser = await newUser.save();
    console.log(request.file);
    // console.log(savedUser);
    res.status(201).json(newUser); // 201 status code indicates successful resource creation
} catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
}
})
 
userRouter.post('/api/address',checkSchema(validateaddress),async(request,response)=>{
        // const data=matchedData(request);
        const error=validationResult(request);
        const {body:data}=request;
        // const data =matchedData(request)
        //Matched data will return the value validated from the method in validateaddress it wont give full obj field it will return only the field which is in the method
        if(!error)
          return response.status(400).send({error:error.array()})
        const newAddress= new addressmodel(data)
        const savedata=await newAddress.save();
        const user= await usermodel.findById(data.user_id)
        user.address.push(savedata) //we are pushing the address to the user
        await user.save();
        response.status(201).send(savedata);
})
userRouter.get('/api/user/:id',async (req,res)=>{
  const {params:{id}}=req
  try{
    console.log(id);
  if(id==undefined){
    console.log(id);
    const alluser= await usermodel.find()
    return res.send(alluser)
  }
  else{
    if(!isNaN(id))
       return res.status(400).send("Bad error")
    else{
      const getuser=await usermodel.findById(id)
      return getuser!=null ?  res.send(getuser) : res.statusCode(404)
  }}
}
  catch(error){
    return res.send({Error_acquired :error})
  }
})

userRouter.get('/api/address',async (req,res)=>{
  const address=await addressmodel.find().populate('user_id')
  res.send(address)
})

