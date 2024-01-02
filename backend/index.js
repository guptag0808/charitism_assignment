const express= require('express')

const { connection } = require('./db')
const app= express()
const PORT= 4000
const {userRouter} = require('./Routes/userRoutes')
const router = require('./Routes/todoRoutes')
const {authentication} = require("./middleware/authentication")
//parsing the body data
app.use(express.json())

app.use("/",userRouter)
// All routes are protected
app.use(authentication)
app.use("/todo",router)

app.listen(PORT,async()=>{
	try{
		await connection
		console.log("Server is connected to DB")
	}catch(err){
		console.log(err.message)
	}
	console.log('server is running at port ',PORT)
})