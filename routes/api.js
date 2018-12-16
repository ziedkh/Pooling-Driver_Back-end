// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

/*  This is a sample API route. */

// https://pooling-backend-n2v4dp.turbo360-vertex.com
//https://www.turbo360.co/vertex/pooling-backend-n2v4dp
//https://mlab.com/databases/mongo-proj/collections/drivers
const Driver = require('../models/Driver')

router.get('/Driver', (req, res) => {

	const query =req.query

	/*  specific age 

	1* Driver.find({age:{$gt:30,$lt:40}})

	2*  if the query has an age than 'll get the greater age automatically  
	    let filters =req.query
	    if (query.age != null){
			 filters= {
				 age:{$gt: query.age}
			 }
	   }


	3* 

	*/
	Driver.find(query)
	.then(Drivers => {
	res.json({
		confirmation: 'success',
        data : Drivers
	})
}).catch(err=>{
	res.json({
		confirmation :'fail',
		message :err.message
	})
})
})
//the update should be before the /id to be intrepreted
//eg :http://localhost:3000/api/Driver/update?id=5c132b839d38230368f4dda3&age=40
router.get('/Driver/update', (req,res) => {
	const query = req.query
	const DriverId = query.id
	delete query['id']

	Driver.findByIdAndUpdate(DriverId , query,{new:true})
	.then(Driver=> {
		res.json({
			confirmation :'success',
			data: Driver
		})
	})
	.catch(err=> {
		res.json({
		confirmation :'fail',
		message : err.message
	})

	})
})

router.get('/Driver/remove', (req,res)=> {
	const query =req.query
	Driver.findByIdAndRemove(query.id)
	.then(data => {
		res.json({
			confirmation:'success',
			data:'Driver '+query.id+' successfullly removed'
		})

	})
	.catch(err=> {
		res.json({
		confirmation :'fail',
		message : err.message
	})
	})
})

//quering by id 
router.get('/Driver/:id',(req, res)=> {
	const id = req.params.id

	Driver.findById(id)
	.then(Driver => {
		res.json({
			confirmation :"sucess",
			data:Driver
		})
	}).catch(err=> {
		res.json({
		   confirmation :'fail',
		   message : 'Driver id :'+id+' not found!!!'
	    })
	})	
})



router.post('/Driver',(req,res) => {

	Driver.create(req.body)
	.then(
	    Driver => {
		res.json({
		confirmation :'success',
		data : Driver
		})
	})
    .catch(err =>{

		res.json({
		confirmation :'fail',
		message :err.message
	    })
	})
})



module.exports = router
