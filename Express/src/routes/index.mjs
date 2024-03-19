import { Router } from "express";
import { userrouter } from "./user.mjs";
import { app } from "./stock.mjs";

export const router =Router()

router.use(userrouter)
router.use(app)