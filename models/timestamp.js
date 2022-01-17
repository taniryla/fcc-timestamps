
const mongoose = require('mongoose');
// shortcut variable
const Schema = mongoose.Schema;
 
const timestampSchema = new Schema({
 
});
 
module.exports = mongoose.model('Timestamp', timestampSchema)


