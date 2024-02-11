const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    region: { type: String },
    assigned_farmers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Farmer' }],
});

const Folder = mongoose.model('Folder', folderSchema);

module.exports = Folder;
