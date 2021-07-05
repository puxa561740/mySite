const {Schema, model, Types} = require('mongoose');

const sсhema = new Schema({
  description: {type: String},
  from: {type: String, required: true, unique: true},
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Project', sсhema);