import React from "react";
import axios from "axios";
import RecipeEntry from "./RecipeEntry";
import RecipeList from "./RecipeList";

function Home() {

  
  
    return (<div>
        <RecipeEntry />
        <RecipeList />
    </div>);
  }
  
  export default Home;