const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path'); // Import path for file reading
const fs = require('fs'); // Import fs for file system operations
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'uploads')));


// Database
mongoose.connect("mongodb://127.0.0.1:27017/recipe", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("ConnectedToMongoDB"))
  .catch((err) => console.error(err));

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: {
    data: Buffer,
    contentType: String
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Multer configuration (optional, if using disk storage as well)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use original filename
  }
});

const upload = multer({ storage: storage });

app.post('/submit', upload.single('image'), async (req, res) => {
  try {
    console.log(req.file); // Check if file data is available

    const data = await fs.promises.readFile(path.join(__dirname + '/uploads/' + req.file.filename));
    const recipe = new Recipe({
      title: req.body.title,
      description: req.body.description,
      image: {
        data: data,
        contentType: req.file.mimetype
      }
    });
    await recipe.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error processing image');
  }
});

app.get('/data', async (req, res) => {
  try {
    const recipes = await Recipe.find().select('title description image');
    const status = 200; // Assuming a successful response
    res.status(status).json(recipes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data');
  }
});


app.listen(3001, function() {
  console.log("Server started on port 3001");
});
