import { Router } from "express";
import * as rh from "./requestHandler.js";

const router=Router()
router.route("/addBook").post(rh.addBook);
router.route("/getBook").get(rh.getBook);
router.route("/getbooks/:_id").get(rh.getBooks)


export default router;