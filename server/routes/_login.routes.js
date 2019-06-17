var express = require('express');
var router = express.Router(); 
var myDbHelper = require('../helpers/db.helper'); 

var pool= myDbHelper.myPool;

// see all users
router.get('/', async function (req, res, next) { 
    let result = await pool.query('SELECT * FROM food.users'); 
    res.json(result); 
}); 

// user by id
router.get('/:id', async function (req, res, next) { 
    let result = await pool.query(`SELECT * FROM food.users WHERE id=${req.params.id}`); 
    res.json(result); 
}); 

// add new user
router.post('/', async function (req, res, next) { 
    let insertQuery= ` INSERT INTO food.users (firstname, lastname, username, password)
    VALUES ('${req.body.firstname}','${req.body.lastname}','${req.body.username}','${req.body.password}')
    `; 
    let result = await pool.query(insertQuery); 
    res.json(result); 
}); 

router.post('/login', async (req, res, next)=> {
    let username=req.body.username;
    let password=req.body.password;
    let userArr = await pool.query(`SELECT * FROM food.users 
    WHERE username='${username}'
    AND password='${password}' `); 
    if(userArr.length > 0){
        req.session.liveConnect = userArr[0];
        res.json({msg:"OK"});
    }else{
        res.json({msg:"NOT OK"});
    }
}); 




module.exports = router;
