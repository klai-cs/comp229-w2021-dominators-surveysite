/*--COMP229-w2021-TeamProject server/routes/survey.js; Dominators; 19Mar2021 */

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