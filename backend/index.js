const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 4500;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/recipe", {useNewUrlParser: true, useUnifiedTopology: true})//changing url for db
    .then( () => console.log("ConnectedToMongoDB"))
    .catch((err) => console.error(err));

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });


app.post('/api/posts/create-recipe', upload.single('image'), async (req, res) => {
    const { title, description } = req.body;
    const imageUrl = req.file.path;
    const newRecipe = new Recipe({ title, description, imageUrl });
    await newRecipe.save();
    res.json({ message: 'Recipe created successfully' });
});
app.get('/api/posts/get-recipes', async (req, res) => {
  const recipes = await Recipe.find({},'title description imageUrl');
  const data = recipes.map(recipe => ({
    title: recipe.title,
    description: recipe.description,
    imageUrl: `http://localhost:${PORT}/${recipe.imageUrl}`
  }));
  res.json(data);
});
app.post('/api/posts/update-recipe', upload.single('image'), async (req, res) => {
  const { title, description } = req.body;
  // const imageUrl = req.file.path;
  const existingRecipe = await Recipe.findOne({ title: title});
  // existingRecipe.imageUrl = imageUrl;
  if(existingRecipe)
  {
    existingRecipe.description = description;
    await existingRecipe.save();
    res.json({ message: 'Recipe Updated successfully' });
  }
  else
  {
    res.json({ message: 'Recipe not found' });
  }
  
});
app.post('/api/posts/getRecipeByTitle',async(req,res)=> {
  let title = req.body.title;
  console.log(title);
  let existingRecipe = await Recipe.findOne({ title: title });
  if(!existingRecipe)
  {
    return res.json({ message: 'Recipe Not Found' });
  }
  else
  {
    return res.json(existingRecipe);
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});