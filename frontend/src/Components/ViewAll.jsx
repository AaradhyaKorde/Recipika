import React,{useEffect, useState} from 'react'
import RecipeCard from './RecipeCard'
import './Something.css'

const ViewAll = () => {
    const [array,setArray] = useState([]);
    const [search,setSearch] = useState('');
    let x = async() => {
        const response = await fetch('http://localhost:4500/api/posts/get-recipes',{
            method: 'GET'
        })
        const data = await response.json();
        setArray(data);
    }
    useEffect(() => {
        x();
    },[])
    let searchRecipe = async() => {
      const response = await fetch('http://localhost:4500/api/posts/getRecipeByCategory',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({category: search})
      })
      let data = await response.json();
      console.log(data);
      if(response.ok && data.length > 0) {
        setArray(data);
      }
    }
  return (
    <>
      <div class="input-group ml-12">
        <input type="text" class="input" id="Email" name="Email" placeholder="Search by category..." autocomplete="off" value={search} onChange={(e) => {
          setSearch(e.target.value);
        }} />
        <input class="button--submit" value="Search" onClick={searchRecipe}  />
      </div>
      <div className='mt-[8.6vh] bg-gray-900 px-10 py-20 flex gap-5 flex-wrap items-center justify-around'>
        {array.map(RecipeCard)}
      </div>
    </>
  )
}

export default ViewAll
