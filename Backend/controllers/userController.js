const Admin = require('../models/admin');
const Farmer = require('../models/farmer');
const Folder = require('../models/Folder');

// Create a new user (admin or farmer)
exports.createUser = async (req, res) => {
  const { userType, username, password, name, mobile_no, address, crops, region } = req.body;

  try {
    let newUser;

    if (userType === 'admin') {
      // Create a new admin
      newUser = new Admin({ username, password, name, mobile_no, address });
    } else if (userType === 'farmer') {
      // Create a new farmer
      newUser = new Farmer({ username, password, name, mobile_no, address, crops, region });

      // Update assigned_folders of the farmer based on the region in the folder collection
      const foldersToUpdate = await Folder.find({ region });
      newUser.assigned_folders = foldersToUpdate.map(folder => folder._id);

      // Add the farmer to the assigned_farmers array of each folder
      for (const folder of foldersToUpdate) {
        folder.assigned_farmers.push(newUser._id);
        await folder.save();
      }
    } else {
      return res.status(400).json({ message: 'Invalid user type' });
    }

    // Save the new user
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
