// controllers/authController.js
const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');
const Farmer = require('../models/farmer');

exports.register = async(req, res)=>{
    try{
        //get data
        const{ name, email, password}=req.body;
        //check if user already exist
        const existinguser = await Admin.findOne({email});

        if(existinguser){
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            })
        }
        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch(err){
            return res.status(500).json({
                success: false,
                message: 'Error in hashing password'
            })
        }

        //create entry for user
        const user = await Admin.create({
            name,email,password:hashedPassword
        })

        return res.status(200).json({
            success: true,
            message:'User Created Successfully'
        })
    }
    catch(error){
        return res.status(500).json({
            success:'false',
            message: 'User Cannot be registered, please try agian later'
        })
    }
}

