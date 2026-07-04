const mongoose = require('mongoose');



const musicSchema = new mongoose.Schema({
  uri: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,                                              //artist ki id denge jo ki ek object hai
    ref: "user",                                                                       //object ka reference import krenge
    required: true,
  }
})


const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel;