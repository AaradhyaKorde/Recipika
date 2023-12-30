import React,{useEffect, useState} from 'react'
import RecipeCard from './RecipeCard'

const ViewAll = () => {
    const [array,setArray] = useState([]);
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
  return (
    <div className='mt-[8.6vh] bg-gray-900 px-10 py-20 flex gap-5 flex-wrap items-center justify-around'>
      {array.map(RecipeCard)}
    </div>
  )
}

export default ViewAll
