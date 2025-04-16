import User from '../model/userModel.js';

export const create = async (req, res) => {  
    try{
        const userData = new User(req.body);
        const {userName}=userData;

        const userExist=await User.findOne({userName});
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }
        const savedUser= await userData.save();
        return res.status(200).json({message:"User created successfully", User:savedUser});
    } catch(error){
        res.status(500).json({message:"Internal server error"});
    }}