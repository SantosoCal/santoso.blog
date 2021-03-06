const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  description: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true },
  }, {
  timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;