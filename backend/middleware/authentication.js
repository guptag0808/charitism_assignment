
const jwt = require('jsonwebtoken')
const {UserModel} = require('../models/userModel')
require('dotenv').config()
const authentication  =async(req,res,next)=>{
	const token = req.headers.authorization
	try{
		if(!token){
		return	res.send({"msg":"Please Login First"})
		}
		var decoded = await jwt.verify(token, process.env.secretKey)
		if(!decoded){
		 return	res.status(400).send({"msg":"Invalid Token"})
		 }
		const userId = decoded.userId  
			const user = await UserModel.findById(userId)
			 req.userId=userId
			 req.user  = user
		next()

	}catch(err){
		res.send(err.message)
	}
}

module.exports={authentication}