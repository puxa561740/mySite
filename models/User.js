const {Schema, model, Types} = require('mongoose');

const sсhema = new Schema({
  email: {
    type: String, 
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true,
  },
  links:[{type: Types.ObjectId, ref: 'Link'}]
})

module.exports = model('User', sсhema)