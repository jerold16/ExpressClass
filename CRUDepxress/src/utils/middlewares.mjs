import { response } from "express";
import { request } from "http";
import multer from "multer";
import path from "path";
import { contactmodel } from "../Database/contact.mjs";

    const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'public/images')
        },
        filename:(req,file,cb)=>{
            cb(null,path.basename(file.originalname,path.extname(file.originalname))+"_"+Date.now()+path.extname(file.originalname))
        },       
    })

    const storeresume=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'public/filesresume')
        },
        filename:(req,file,cb)=>{
            cb(null,path.basename(file.originalname,path.extname(file.originalname))+'_'+Date.now()+path.extname(file.originalname))
        },        
    })

   export  const contactmiddleware=(request,response,next)=>{
        const {body}=request
        
        const resumepath=`${request.protocol}://${request.get('host')}/filesresume/${request.file.filename}`
        body.resume=resumepath;
        request.contactdata=body
        next()
    }

export const upload=multer({
    storage:storage
})
export const uploadresume=multer({
    storage:storeresume,
    limits:{
        fileSize:5*1024*1024
    }
})

