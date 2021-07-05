const {Schema, model, Types} = require('mongoose');

const sсhema = new Schema({
  about: {
    type: String
  },
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('AboutUser', sсhema);