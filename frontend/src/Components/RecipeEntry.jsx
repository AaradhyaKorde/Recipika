import React, { useState } from 'react';
import axios from "axios";
import { Buffer } from 'buffer'; // Import Buffer if needed for image manipulation

function RecipeEntry() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // For the image file

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(); // Create FormData object for file uploads
      formData.append('title', title);
      formData.append('description', description);
      formData.append('image', image);

      const response = await axios.post('/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data); // Handle success response
    } catch (err) {
      console.error(err); // Handle error
    }
  };

  return (
    <div>
      <form action="/submit" method="POST" encType="multipart/form-data">
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RecipeEntry;
