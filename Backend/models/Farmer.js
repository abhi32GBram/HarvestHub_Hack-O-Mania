const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        type: String,
        required: true
      },
    mobile_no: {
        type: Number
      },
      address: {
        type: String
      },
      assigned_folders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Folder' }],
      crops: [String], // Array of crops associated with the farmer
      region: {type: String} // Array of regions associated with the farmer
});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
