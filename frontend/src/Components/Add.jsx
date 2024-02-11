import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
import './Something.css'
import Navbar from './navbar';
import Logo from '../Components/logo'

const Add = (props) => {
  const navigateTo = useNavigate();
  useEffect(()=> {
    if(props.login ==null)
    {
      navigateTo('/viewAll');
    }
  },[])

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    props.setLoader(true);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('categories', categories);
    formData.append('user',props.login);

      const response = await fetch('http://localhost:4500/api/posts/create-recipe', { 
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Recipe created successfully');
        navigateTo('/viewAll');
        props.setLoader(false);
      } else {
        console.error('Failed to create post');
        props.setLoader(false);
      }
  };
  
  return (
    <div className="form-container">
      <Logo />
      <Navbar />
      <div className="addFormBackground bg-addFormBg bg-cover ">

      </div>
    <form onSubmit={handleSubmit} id="postForm">
      <label id='titleLable' htmlFor="title">Title:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="description">Description:</label>
    <textarea id="description" name="description" rows="4" required onChange={(e) => setDescription(e.target.value)}></textarea>
      <div className="imageInput">
      <label>Image:</label>
      <input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <label id="categoriesInputLable">Categories (separated by commas):</label>
      <input type="text" id="categoriesInput" placeholder="Enter categories" onChange={(e) => setCategories(e.target.value)} />
      <button className='addRecipeBtn' type="submit">Add Recipe</button>
    </form>
    </div>
  );
};

export default Add;