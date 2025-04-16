import express from "express";
import {create} from "../controller/userController.js";
const router = express.Router();

router.post("/create", create);
router.get("/getAll", (req, res) => {
    res.send("Get all users");
});

export default router;