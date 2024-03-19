import { Router,  request, response } from "express";
import { user } from "../utilis/content.mjs";
import { founduserid } from "../utilis/middlewares.mjs";
import { body, checkSchema, matchedData, query, validationResult } from "express-validator";
import { userpostvalidation } from "../utilis/validationschema.mjs";
import { UserModel } from "../mongoose/schemas/user.mjs";

export const userrouter= Router()

//get all user

// userrouter.get('/api/user', (req,res)=>{
//     res.send(user)
// })




// get user based on id
// userrouter.get('/api/user/:id' ,(request,response)=>{
//     const {params :{id}}=request
//     const parsedID=parseInt(id);
//     if(isNaN(parsedID))
//      return response.status(400).send("Bad request enter the number")
//     const founduser=UserModel.findById(id)
//     if(!founduser)
//       return response.sendStatus(404)
//     return response.send(founduser)
// })

//get user based on name 
//http://localhost:3000/api/user?type=username&value=Jerold
userrouter.get('/api/user',async (request,response)=>{
    const {query : {type,value}}=request;
    if(!type&&!value){
    let alluser=await UserModel.find()
     return response.send(alluser)
    }
    if(type && value){
        // let founduser=user.filter((userdata)=>userdata[type].includes(value))
        let founduser=await UserModel.findByName(value)
        if(founduser.length>0)
        return response.status(201).send(founduser)
        else
        return response.sendStatus(404)
    }
    return response.sendStatus(400)
})


userrouter.put('/api/user/:id',founduserid,(request,response)=>{
        const {body}=request
        const {findIndex}=request
        user[findIndex]={
            id: user[findIndex].id,...body
        }
        return response.status(201).send("changed")
})

userrouter.patch('/api/user/:id',founduserid,(request,response)=>{
    const {body}=request
    const {findIndex}=request
    user[findIndex]={
        id: user[findIndex].id,...user[findIndex],...body,
    }
    return response.status(201).send("changed")
})

userrouter.delete('/api/user/:id',founduserid,(request,response)=>{
    const {findIndex}=request;
    user.splice(findIndex,1)
    response.send("success")
})

userrouter.post('/api/user',checkSchema(userpostvalidation),async (request,response)=>{
    // const {body}=request;
    const data=matchedData(request)
    const result=validationResult(request)
    if(!result.isEmpty())
     return response.send({error:result.array()})
    // console.log(user[user.length-1].id+1);
    const newuser=new UserModel(data);
    try{
        const saveduser= await newuser.save();
        return response.status(201).send(saveduser)
    }
    catch(error){
        console.log(error+"Error from db");
        return response.status(400).send("Not working");
    }
})