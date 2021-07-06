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
  Projects:[{
    type: Schema.Types.ObjectId, 
    ref: 'Project'
  }],
  SocialLinks: {
    type: Schema.Types.ObjectId, 
    ref: 'SocialLinks'
  },
  AboutUser: {
    type: Schema.Types.ObjectId, 
    ref: 'AboutUser'
  }
})

module.exports = model('User', sсhema);