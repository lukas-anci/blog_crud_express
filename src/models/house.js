const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const houseSchema = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    houseNo: {
      type: Number,
      require: true,
    },
    //surisame house ownersId , su konkreciu owner _id , mongoose integruotais metodais:
    ownersId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'owner',
    },
  },
  { timestamps: true }
);

//eksportuoti naujai sukurta objekta pagal sia schema
// dazniausiai turetu buti post vienaskaitai , jei kolekcijos pavadinimas posts
const House = mongoose.model('house', houseSchema);
//sukurem post modeli pagal postSchema

module.exports = House;
