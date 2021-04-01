/*--COMP229-w2021-TeamProject server/models/survey.js; Dominators; 19Mar2021 */

//require modules for the Survey Model
let mongoose = require('mongoose');

//create a model class
let surveyModel = mongoose.Schema({
    name: String,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    a1: String,
    a2: String,
    a3: String,
    a4: String,
    a5: String
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);