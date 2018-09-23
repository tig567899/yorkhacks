const express = require('express');

const sqlSearch = require('./sql-search');

const router = express.Router();

router.route('/login').post(async function(req, res, next) {
    try
	{
		var data = await sqlSearch.login(req);
		//console.log(data);
		res.status(200).send(data);
	}
	catch(err)
	{
		next(err);
		console.log(err);
		res.status(500).send(data);
		return;
	}
}

router.route('/getData').post(async function(req, res, next) {
    try
    {
        var data = await sqlSearch.getData(req);
        //console.log(data);
        res.status(200).json(data);
    }
    
	catch(err)
	{
		next(err);
		console.log(err);
		res.status(500).send(data);
		return;
	}
}

router.route('/updateData').post(async function(req, res, next) {
    try
    {
        var data = await sqlSearch.updateData(req);
        //console.log(data);
        res.status(200).send(data);
    }
    
	catch(err)
	{
		next(err);
		console.log(err);
		res.status(500).send(data);
		return;
	}
}

router.route('/updateInfo').post(async function(req, res, next) {
    try
    {
        var data = await sqlSearch.updateInfo(req);
        //console.log(data);
        res.status(200).send(data);
    }
    
	catch(err)
	{
		next(err);
		console.log(err);
		res.status(500).send(data);
		return;
	}
}

router.route('/getInfo').post(async function(req, res, next) {
    try
    {
        var data = await sqlSearch.getInfo(req);
        //console.log(data);
        res.status(200).send(data);
    }
    
	catch(err)
	{
		next(err);
		console.log(err);
		res.status(500).send(data);
		return;
	}
}

router.route('/makeOrder').post(async function(req, res, next) {
    try
    {
        var data = await sqlSearch.makeOrder(req);
        //console.log(data);
        res.status(200).send(data);
    }
    
	catch(err)
	{
		next(err);
		console.log(err);
		res.status(500).send(data);
		return;
	}
}

module.exports = router;

// 1 login 2 check info 3 retrieve info 4 send info 5 modify info 6 chapter info 7 create order to a clinic