const Folder = require('../models/Folder');
const Farmer = require('../models/farmer');

exports.createFolder = async (req, res) => {
  try {
    const { name, region } = req.body;

    // Create folder
    const folder = new Folder({ name, region });

    // Save folder
    await folder.save();

    // Assign folder to farmers based on region
    if (region) {
      const farmers = await Farmer.find({ region });
      for (const farmer of farmers) {
        farmer.assigned_folders.push(folder);
        await farmer.save();
      }
    }

    res.status(201).json(folder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
