import React,{useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import './navbarStyles.css'
const Navbar = (props)=>{



    
    const [search,setSearch] = useState('');
    const [array,setArray] = useState([]);

    let searchRecipe = async() => {
        console.log(search);
        props.setLoader(true);
        const response = await fetch('http://localhost:4500/api/posts/getRecipeByCategory',{
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({category: search})
        })
        let data = await response.json();
        console.log(data);
        if(response.ok && data.length > 0) {
          setArray(data);
          props.setLoader(false);
        }
        props.setLoader(false);
      }




    const navigateTo = useNavigate();
    return(
       <nav className="navbar">
        <ul>
        <div class="input-group ml-12">
        <input type="text" class="input" id="Email" name="Email" placeholder="Search by category..." autocomplete="off" value={search} onChange={async(e) => {
          setSearch(e.target.value);
          await searchRecipe();
        }} />
        <input class="button--submit" value="Search" onClick={searchRecipe}  />
      </div>
            <Link to='/addRecipe'><li>Create Recipe</li></Link>
            <Link to='/myRecipe'><li>My Recipes</li></Link>
            <Link to='/viewAll'><li>All Recipes</li></Link>
            <Link to='/login'><li>Log Out</li></Link>
            
        </ul>
       </nav>
    )
}

export default Navbar;