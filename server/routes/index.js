/*
  --COMP229-w2021-TeamProject server/routes/index.js;
  --Group Name:  Dominators 
  --Date Created: 02, April, 2021 
  --Student Name: Ho Yin Lai - 301162000
  --Student Name: Laxman Gothe - 301102988
  --Student Name: Sissi Kan - 301170042
  --Student Name: Arpit Kamal - 301152116
  --Student Name: Janesha Sharma - 301093302
  */

//require modules for the routes
let express = require('express');
let router = express.Router();

//reference controller
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);


module.exports = router;
