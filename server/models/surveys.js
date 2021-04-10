/*
  --COMP229-w2021-TeamProject server/models/surveys.js;
  --Group Name:  Dominators 
  --Date Created: 20, April, 2021 
  --Student Name: Ho Yin Lai - 301162000
  --Student Name: Laxman Gothe - 301102988
  --Student Name: Sissi Kan - 301170042
  --Student Name: Arpit Kamal - 301152116
  --Student Name: Janesha Sharma - 301093302
  */

//require modules for the Survey Model
let mongoose = require('mongoose');

//create a model class
let SurveyModel = mongoose.Schema({
    name: String,
    OwnerName: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String
    
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', SurveyModel);