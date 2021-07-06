const {Schema, model} = require('mongoose');

const sсhema = new Schema({
  about: {
    type: String
  },
  initials: {
    type: String
  },
  sex: {
    type: String
  },
  skills: {
    type: String
  },
  education: {
    type: String
  },
  workExamples: {
    type: String
  },
  age: {
    type: Number
  },
  picture: {
    type: String
  },
  link: {
    type: String
  },
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('AboutUser', sсhema);