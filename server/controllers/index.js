/*
  --COMP229-w2021-TeamProject server/controllers/index.js;
  --Group Name:  Dominators 
  --Date Created: 02, April, 2021 
  --Student Name: Ho Yin Lai - 301162000
  --Student Name: Laxman Gothe - 301102988
  --Student Name: Sissi Kan - 301170042
  --Student Name: Arpit Kamal - 301152116
  --Student Name: Janesha Sharma - 301093302
  */

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

