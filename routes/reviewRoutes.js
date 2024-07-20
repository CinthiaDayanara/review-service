const express = require('express');
const router = express.Router();
const Review = require('../models/review');

router.post('/api/reviews', async (req, res) => {
  try {
    const { userId, courseId, rating, comment } = req.body;

    const review = new Review({
      userId,
      courseId,
      rating,
      comment
    });

    await review.save();
    res.status(201).json({ message: 'Reseña creada exitosamente', review });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la reseña', details: error.message });
  }
});


module.exports = router;
