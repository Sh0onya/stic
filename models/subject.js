const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: String
  },
  music:{
    type:String,
    default: "Nothing"
  },
  times: {
    type: Number,
    default: 0    
  },
  isActive: {
    type: Boolean,
    default: true
  },
  rate:{
    type: Date
  },
  rbte:{
    type: Date
  },
  rcte:{
    type: Date
  },
  rdte:{
    type: Date
  },
  rete:{
    type: Date
  },
  star:{
    type: Number,
    default:0
  },
  stbr:{
    type: Number,
    default:0
  },
  stcr:{
    type: Number,
    default:0
  },
  stdr:{
    type: Number,
    default:0
  },
  ster:{
    type: Number,
    default:0
  }
})

const subjectSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    
  },
  name: {
    type: String,
    
  },
  nopic:{
    type: Number,
    default: 0
    
  },
  nosion: {
    type: Number,
    default: 0    
  },
  isActive:{
    type: Boolean,
    default: true

  },
  topic: {
    type: [topicSchema]
  }
})

module.exports = mongoose.model('Subject', subjectSchema)