import { Router } from "express";
import { userRouter } from "./userRouter.mjs";
import { contactRouter } from "./contactrouter.mjs";

export const indexRouter=Router()
indexRouter.use(userRouter)
indexRouter.use(contactRouter)