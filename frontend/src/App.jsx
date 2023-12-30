import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Add from './Components/Add'
import ViewAll from './Components/ViewAll'
import Edit from './Components/Edit'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/viewall' element={<ViewAll />} />
          <Route path='/addRecipe' element={<Add />} />
          <Route path='/editRecipe/:title' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
