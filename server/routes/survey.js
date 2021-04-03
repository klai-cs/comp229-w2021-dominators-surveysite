/*
  --COMP229-w2021-TeamProject server/routes/survey.js;
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
let mongoose = require('mongoose');

//reference controller
let contactController = require('../controllers/survey');


/* GET Route for the Contact List page - READ Openration */
router.get('/' ,contactController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add' ,contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add' , contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id' ,  contactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id' ,  contactController.processEditPage);

/* GET Route for displaying the Fill page - UPDATE Operation */
router.get('/fill/:id' ,  contactController.displayFillPage);

/* POST Route for processing the Fill page - UPDATE Operation */
router.post('/fill/:id' ,  contactController.processFillPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id' ,  contactController.performDelete);



module.exports = router;