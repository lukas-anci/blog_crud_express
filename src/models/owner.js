const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//reikia apibrezti kokio tipo duomenys bus saugomi DB
// {title:string,
// body:string,
// }

const ownerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//eksportuoti naujai sukurta objekta pagal sia schema
// dazniausiai turetu buti post vienaskaitai , jei kolekcijos pavadinimas posts
const Owner = mongoose.model('owner', ownerSchema);
//sukurem post modeli pagal postSchema

module.exports = Owner;
