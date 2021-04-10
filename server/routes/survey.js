/*
  --COMP229-w2021-TeamProject server/routes/survey.js;
  --Group Name:  Dominators 
  --Date Created: 10, April, 2021 
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
let surveyController = require('../controllers/survey');

// helper function for guard purpose
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/user/login');
    }
    next();
}

/* GET Route for the Contact List page - READ Openration */
router.get('/' ,surveyController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add' ,requireAuth,surveyController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add' ,requireAuth, surveyController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id' ,requireAuth,  surveyController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id' ,requireAuth,  surveyController.processEditPage);

/* GET Route for displaying the Fill page - READ Operation */
router.get('/fill/:id' , surveyController.displayFillPage);

/* POST Route for processing the Fill page - Create Operation */
router.post('/fill/:id' ,  surveyController.processFillPage);

/* POST Route for displaying the Survey owned by User page - READ Operation */
router.get('/mysurvey' , requireAuth, surveyController.displayMySurveyPage);

/* POST Route for displaying the Survey's reponses - READ Operation */
router.get('/surveyInfo/:id' ,requireAuth, surveyController.displaySurveyInfoPage);

/* GET to perform Deletion - DELETE Operation */
router.get('/delete/:id' ,requireAuth,  surveyController.performDelete);



module.exports = router;