const {Schema, model, Types} = require('mongoose');

const sсhema = new Schema({
  links:[{type: Types.ObjectId, ref: 'Link'}]
})

module.exports = model('Link', sсhema)