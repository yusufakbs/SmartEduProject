const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const CategoryScehma = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
 slug:{
    type:String,
    unique:true
  },
 
});

CategoryScehma.pre('validate' ,function(next) {
  this.slug=slugify(this.name,{
    lower:true,
    strict:true,
  });  
  next();
})

const Category = mongoose.model('Category',CategoryScehma);
module.exports=Category;