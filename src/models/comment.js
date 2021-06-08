const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },

    //suriame comentaruose postId , su konkretaus posto  _id , mongoose integruotais metodais:
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'post',
    },
  },
  { timestamps: true }
);

//eksportuoti naujai sukurta objekta pagal sia schema
// dazniausiai turetu buti post vienaskaitai , jei kolekcijos pavadinimas posts
const Comment = mongoose.model('comment', commentSchema);
//sukurem post modeli pagal postSchema

module.exports = Comment;
