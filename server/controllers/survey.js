/*
  --COMP229-w2021-TeamProject server/controllers/survey.js;
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

//display Contact list and sorted in ascending order
module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
                return console.error(err);
        }
        else
        {
            res.render('survey/list', 
            {
            title: 'Survey List', 
            SurveyList: surveyList,
            displayName: req.user ? req.user.displayName : '' 
        });
        }
    }).sort({name: 1});
}

//Display the Create A Survey page
module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', 
            {title: 'Create A Survey',
            displayName: req.user ? req.user.displayName : '' 
        });
}

//Process the Add survey operation
module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "q1": req.body.q1,
        "q2":req.body.q2,
        "q3":req.body.q3,
        "q4":req.body.q4,
        "q5":req.body.q5
    });

    Survey.create(newSurvey, (err, Survey) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contactlist
            res.redirect('/surveylist');
        }
    });
}

//Display the Update Survey page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('survey/edit', 
            {title: 'Edit Survey', 
            survey: surveyToEdit,
            displayName: req.user ? req.user.displayName : '' 
        })
        }
    });
}

// Process the update Survey operation
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    
    let updatedSurvey = Survey({
        "_id": id,
        "name": req.body.name,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3":req.body.q3,
        "q4":req.body.q4,
        "q5":req.body.q5
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/surveylist');
        }
    });
}

//Display the Fill Survey page
module.exports.displayFillPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToFill) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit view
            res.render('survey/fill', 
            {title: 'Fill Survey', 
            survey: surveyToFill,
            displayName: req.user ? req.user.displayName : '' 
        })
        }
    });
}

// Process the update survey answer operation
module.exports.processFillPage = (req, res, next) => {
    let id = req.params.id
    
    let updatedSurvey = Survey({
        "_id": id,
        "a1": req.body.a1,
        "a2": req.body.a2,
        "a3":req.body.a3,
        "a4":req.body.a4,
        "a5":req.body.a5
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/surveylist');
        }
    });
}

//Delete the contact 
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the contact list
            res.redirect('/surveylist');
        }

    });
}
