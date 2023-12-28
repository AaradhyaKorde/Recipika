import React, { useState, useEffect } from 'react';
import axios from "axios";

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data');
        setRecipes(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <img
              src={`../../backend/uploads/${recipe.image}`} // Adjust path if needed
              alt={recipe.title}
              onError={() => {
                // Handle error
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
