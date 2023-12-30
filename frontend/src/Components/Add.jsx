import { useState } from "react";
import './Something.css'
const Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
      const response = await fetch('http://localhost:4500/api/posts/create-recipe', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Recipe created successfully');
      } else {
        console.error('Failed to create post');
      }
  };
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit} id="postForm">
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="description">Description:</label>
    <textarea id="description" name="description" rows="4" required onChange={(e) => setDescription(e.target.value)}></textarea>
      <label>Image:</label>
      <input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Add Recipe</button>
    </form>
    </div>
  );
};

export default Add;