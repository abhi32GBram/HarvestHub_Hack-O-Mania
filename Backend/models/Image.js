const mongoose = require('mongoose');

const imageDataSchema = new mongoose.Schema({
    folder_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', required: true },
    farmer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer', required: true },
    image_url: { type: String, required: true },
    data: { type: Object }, // Additional data related to the image
    // Add other image-related fields here
});
const ImageData = mongoose.model('ImageData', imageDataSchema);

module.exports = ImageData;
