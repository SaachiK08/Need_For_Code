const User = require("../models/usermodel")
const bcryptjs= require('bcryptjs')

const securePassword= async(password)=>{
    try {
        const passwordhash =await bcryptjs.hash(password,10);
        return passwordhash;
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const register_user =async(req,res)=>{
    try {
        const securepassword = await securePassword(req.body.password)
        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:securepassword,
            collegeid:req.body.collegeid,
            collegename:req.body.collegename,
            isverfied:true,
            mobilenumber:req.body.mobilenumber
        })

        const userData = await User.findOne({email:req.body.email})
        if (userData) {
            res.status(200).send({success:false,msg:"Email Already Exists"})
        } else {
            const user_data = await user.save();
            res.status(200).send({success:true,data:user_data})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const login_user =async(req,res)=>{
    try {
        const email = req.body.email
        const password =req.body.password
        const user_data = await User.findOne({
            email:email
        })
        if (user_data) {
            const password_match = await bcryptjs.compare(password,user_data.password)
            if (password_match) {
                res.status(200).send({
                    success:true,
                    msg:"login Successfull",
                })
            }
            else{
                res.status(200).send({success:false,msg:"login details are incorrect"})
            }
        } else {
            res.status(200).send({success:false,msg:"login details are incorrect"})
        }
    } catch (error) {
        res.status(400).send(error.message)
    }

}