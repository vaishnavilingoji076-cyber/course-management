const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt= require("jsonwebtoken");

exports.register=async(req,res)=>{
    try{
        const {firstName, lastName, email,password}=req.body;

        const existingUser=await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:"User already exists vaishnav",
            });
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const user=await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
        });
        res.status(201).json({
            message:"user registered succesfully",
        });
    }catch(error){
        res.status(500).json({
          error:error.message,
        });
    }

};

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user=await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"User not found",
            });
        }

        const isMatch=await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatch){
            return res.status(400).json({
                message:"Invalid credentials",
            });
        }

        const token=jwt.sign({
            id:user._id,
            role:user.role,
        },
    process.env.JWT_secret,{
        expiresIn:"1d",
    });

    res.status(200).json({
        token,
        user,
    });

    }catch(error){
        res.status(500).json({
            error:error.message,
        });
    }
};
