import { Router, request, response } from "express";
import { contactmiddleware, uploadresume } from "../utils/middlewares.mjs";
import { contactmodel } from "../Database/contact.mjs";
import { checkSchema, validationResult } from "express-validator";
import { validatecontact } from "../utils/validationSchemas.mjs";

export const contactRouter=Router()


contactRouter.post('/api/contact',uploadresume.single('resume'),contactmiddleware,checkSchema(validatecontact),
async(request,response)=>{
    const {contactdata}=request
    const error=validationResult(request)
    if(!error.isEmpty())
      return response.status(400).send({AcquiredError:error.array()})
    const newcontact=new contactmodel(contactdata)
    //i didnt use matchedData function bcoz it only gives thee value in the validation schema
    try{
        await newcontact.save();
        return response.status(201).send(newcontact)

    }catch(error){
       return  response.sendStatus(400)
    }
})
