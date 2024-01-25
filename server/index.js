// server.js (Express server)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors');
app.use(cors());


mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a mongoose model for the waitlist
const Waitlist = mongoose.model('Waitlist', {
  firstName: String,
  lastName: String,
  email: String,
  industry: String,
});

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Endpoint to handle waitlist submissions
app.post('/api/waitlist', async (req, res) => {
  try {
    const { firstName, lastName, email, industry } = req.body;

    // Create a new waitlist entry
    const waitlistEntry = new Waitlist({ firstName, lastName, email, industry });

    // Save the entry to the database
    await waitlistEntry.save();

    // Respond with success
    res.status(201).json({ message: 'Successfully joined the waitlist!' });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/api/admin/waitlist', async (req, res) => {
  try {
    // Fetch all entries from the waitlist
    const waitlistEntries = await Waitlist.find();

    // Respond with the waitlist data
    res.status(200).json(waitlistEntries);
  } catch (error) {
    console.error('Error fetching waitlist data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});