const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: String, required: true },
});

// 1st argument: Capital + Singular... mongoose then lowers and plurals and matches db collection
// This is an object model that mongoose creates...
module.exports = mongoose.model("Book", booksSchema);
