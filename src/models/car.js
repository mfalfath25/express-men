const mongoose = require('mongoose') // mongoose for mongodb
const date = new Date()

const currDate = date.toLocaleDateString('en-CA')
// const { Timestamp } = require('mongodb')

// Define a schema
var Schema = mongoose.Schema

// Schema constructor
const CarSchema = new Schema({
  // _Id: Schema.Types.ObjectId,
  nama: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  kategori: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  rent_start: {
    type: Date,
    required: false,
    default: currDate,
  },
  rent_end: {
    type: Date,
    required: false,
    default: currDate,
  },
  message: {
    type: String,
    required: false,
  }
})

// Compile model from schema
var Car = mongoose.model('Car', CarSchema)

module.exports = Car
