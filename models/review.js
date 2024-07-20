const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'  
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Course' 
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);
