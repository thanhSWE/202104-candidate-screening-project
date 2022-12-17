const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
    item:{
        type:String,
        unique:true,
        required: true
    },
});

module.exports = mongoose.model("todo",NewSchema);

async function run() {
    const entry = await NewSchema.create({ name: 'Masteringjs.io' });
    console.log(await NewSchema.countDocuments({ item: entry.item })); // 1
  
    // Delete the document by its _id
    await NewSchema.findOneAndDelete({ item: entry.item }, (err) => {
        if(err){
            console.log(err)
        }
    });
  
    console.log(await NewSchema.countDocuments({ item: entry.item })); // 0
  }
 


