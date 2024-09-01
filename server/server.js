const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const fileFilter = (req, file, cb) => {
  // Accept only pdf files
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB file size limit
  }
});

// Temporary data storage
let submissions = [];

// API endpoint for form submission
app.post('/api/contact', upload.single('resume'), (req, res) => {
  try {
    const { name, email, contact, jobRole } = req.body;

    if (!name || !email || !jobRole) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newSubmission = {
      id: Date.now(),
      name,
      email,
      contact,
      jobRole,
      resumePath: req.file ? req.file.path : null,
      submittedAt: new Date()
    };

    submissions.push(newSubmission);

    res.status(200).json({ message: 'Form Submission successful', submission: newSubmission });
  } catch (error) {
    console.error('Error processing submission:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// API endpoint to get all submissions (for demonstration purposes)
app.get('/api/submissions', (req, res) => {
  res.json(submissions);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});