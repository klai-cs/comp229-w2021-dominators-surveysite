/*
  --COMP229-w2021-TeamProject server/models/surveysAnswer.js;
  --Group Name:  Dominators 
  --Date Created: 10, April, 2021 
  --Student Name: Ho Yin Lai - 301162000
  --Student Name: Laxman Gothe - 301102988
  --Student Name: Sissi Kan - 301170042
  --Student Name: Arpit Kamal - 301152116
  --Student Name: Janesha Sharma - 301093302
  */

//require modules for the Survey Model
let mongoose = require('mongoose');

//create a model class
let SurveyAnswerModel = mongoose.Schema({
    SurveryID: String,
    UserName: String,
    a1: String,
    a2: String,
    a3: String,
    a4: String,
    a5: String
},
{
    collection: "surveysAnswer"
});

module.exports = mongoose.model('surveysAnswer', SurveyAnswerModel);