var express = require('express');
var router = express.Router(); 
var myDbHelper = require('../helpers/db.helper'); 

var pool= myDbHelper.myPool;

// ALL
// router.get('/', async function (req, res, next) { 
//     let result = await pool.query('SELECT * FROM food.name'); 
//     res.json(result); 
// }); 

router.get('/', async (req,res,next)=>{
    let q = "SELECT * FROM food.name";
    let allFoods = await pool.query(q);

    let q2 = "SELECT * FROM food.categories";
    let allCats = await pool.query(q2);

    var allFoodsWCats = allFoods.map(function(currentFood){
        var currentCat = allCats.find(c => c.id == currentFood.category);
        currentFood.category = currentCat.name;

        return currentFood;
    });
    res.json(allFoodsWCats);
})


router.delete('/:id', async function (req, res, next) {  
    let result = await pool.query(`DELETE FROM food.name WHERE id=${req.params.id}`); 
    res.json(result); 
});

// msg by id
router.get('/:id', async function (req, res, next) { 
    let result = await pool.query(`SELECT * FROM food.name WHERE id=${req.params.id}`); 
    res.json(result); 
});

// ADD 
router.post('/', async function (req, res, next) { 
    let insertQuery= ` INSERT INTO  food.name (name, category, prep, img) 
    VALUES ('${req.body.name}','${req.body.category}', '${req.body.prep}', '${req.body.img}')
    `; 
    let result = await pool.query(insertQuery); 
    res.json(result); 
}); 


// ADD 
// router.post('/connect', async function (req, res, next) { 
//     let insertQuery= ` INSERT INTO  food.name (sender_id, receiver_id, text) 
//     VALUES ('${req.body.sender_id}',${req.body.receiver_id}, '${req.body.text}')
//     `; 
//     let result = await pool.query(insertQuery); 
//     res.json(result); 
// }); 



module.exports = router;
