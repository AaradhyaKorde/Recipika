import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Components/Add'
import ViewAll from './Components/ViewAll'
import MyRecipe from './Components/MyRecipe'
import Edit from './Components/Edit'
import Login from './Components/Login'
import Register from './Components/Register'
import Show from './Components/Show'

const App = () => {
  const [login,setLogin] = useState(null);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login login={login} setLogin={setLogin} />} />
          <Route path='/viewall' element={<ViewAll login={login} setLogin={setLogin} />} />
          <Route path='/addRecipe' element={<Add login={login} setLogin={setLogin}/>} />
          <Route path='/editRecipe/:title' element={<Edit login={login} setLogin={setLogin}/>} />
          <Route path='/showRecipe/:title' element={<Show login={login} setLogin={setLogin}/>} />
          <Route path='/login' element={<Login login={login} setLogin={setLogin} />} />
          <Route path='/register' element={<Register login={login} setLogin={setLogin} />} />
          <Route path='/myRecipe' element={<MyRecipe login={login} setLogin={setLogin} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
