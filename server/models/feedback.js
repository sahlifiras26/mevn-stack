var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Incident = require('./incident')

var addressSchema = new mongoose.Schema({
    place:{
        type: String
    },
    city:{type:String},
    coordinates: [Number],
    weight:Number,

});
var IncidentSchema = new mongoose.Schema({
    Title:{
        type: String
    },
    Description:{
        type: String
    },
    Date:{
        type:Date,default:Date.now
    },
    address: addressSchema,
    type:{
        type: String
    }

    //,createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
});






var commentSchema = mongoose.Schema({
    content:{type:String},
    date:{type:Date,default:Date.now}
});


var FeedbackSchema = new Schema({
  title: String,
  description: String,
date:{type:Date,default:Date.now()},
    comments : [commentSchema],
    incident : IncidentSchema


});

var Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
