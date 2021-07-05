const {Schema, model, Types} = require('mongoose');

const sсhema = new Schema({
  vk: {type: String},
  linkedin: {type: String},
  twitter: {type: String},
  instagram: {type: String},
  git: {type: String},
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('SocialLinks', sсhema);