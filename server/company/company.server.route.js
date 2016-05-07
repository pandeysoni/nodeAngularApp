var Company= require('./company.server.controller');

// API Server Endpoints
module.exports = function(router){
	router.post('/company', Company.create),
	router.get('/company', Company.getAll),
	router.get('/company/:id', Company.get),
	router.put('/company/:id', Company.update),
	router.delete('/company/:id', Company.remove)
}