var express = require('express');
var router = express.Router(); 
var myDbHelper = require('../helpers/db.helper'); 

var pool= myDbHelper.myPool;
  
router.get('/', async function (req, res, next) { 
    let result = await pool.query('SELECT * FROM food.categories'); 
    res.json(result); 
}); 
router.get('/:id', async function (req, res, next) { 
    let result = await pool.query(`SELECT * FROM food.categories WHERE id=${req.params.id}`); 
    res.json(result); 
}); 
router.post('/', async function (req, res, next) { 
    let insertQuery= ` INSERT INTO  food.categories (name) 
    VALUES ('${req.body.name}')
    `; 
    let result = await pool.query(insertQuery); 
    res.json(result); 
}); 

// /3
router.put('/:id', async function (req, res, next) {  
    let updateQuery= `UPDATE  food.categories  
     SET name='${req.body.name}' ,
     WHERE id=${req.params.id}`;
 
    let result = await pool.query(updateQuery); 
    res.json(result); 
}); 
//?id=3
// /3
router.delete('/:id', async function (req, res, next) {  
    let result = await pool.query(`DELETE FROM food.categories   WHERE id=${req.params.id}`); 
    res.json(result); 
});



module.exports = router;
