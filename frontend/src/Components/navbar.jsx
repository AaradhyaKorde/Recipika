import React from 'react';
import {Link} from 'react-router-dom';
import './navbarStyles.css'

const Navbar = ()=>{
    return(
       <nav className="navbar">
        <ul>
            <Link to='/addRecipe'><li>Create Recipe</li></Link>
            <Link to='/viewAll'><li>Recipes</li></Link>
            {/* <Link to=''><li>About</li></Link> */}
        </ul>
       </nav>
    )
}

export default Navbar;