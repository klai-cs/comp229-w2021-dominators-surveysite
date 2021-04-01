/*--COMP229-w2021-TeamProject server/controllers/index.js; Dominators; 19Mar2021 */

//require modules for the controller
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the model
let Survey = require('../models/surveys');

module.exports.displayHomePage = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
                return console.error(err);
        }
        else
        {
            //console.log(ContactList);

            res.render('index', 
            {title: 'Home', 
            SurveyList: surveyList,
            displayName: req.user ? req.user.displayName : '' 
        });
        }
    }).sort({name: 1});
}

