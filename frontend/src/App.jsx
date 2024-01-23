import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Components/Add'
import ViewAll from './Components/ViewAll'
import Edit from './Components/Edit'
import Login from './Components/Login'
import Register from './Components/Register'
import Show from './Components/Show'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/viewall' element={<ViewAll />} />
          <Route path='/addRecipe' element={<Add />} />
          <Route path='/editRecipe/:title' element={<Edit />} />
          <Route path='/showRecipe/:title' element={<Show />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
