import express, { request, response } from 'express'
import { user } from './content.mjs';

export const founduserid=(request,response,next)=>{
    const {params:{id}}=request;
    const parsedID=parseInt(id)
    if(isNaN(parsedID))
       return response.status(400).send("Enter the correct format")
    const findindex = user.findIndex((userdata)=> userdata.id===parsedID)
    if(findindex<0)
      return response.sendStatus(404)
    request.findIndex=findindex;
    next()
    }