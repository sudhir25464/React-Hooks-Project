import React from 'react'
import Navbar from './component/Navbar'
import HomeSection from './component/HomeSection'
import {Routes,Route} from 'react-router-dom'
import Input from './component/Input'
import UseReducerHook from './component/UseReducerHook'
import TodoApp from './component/TodoApp'
function App() {
  return (
   <>
   {/* <Navbar/> */}
   <Routes>
    <Route path='/' element={<HomeSection/>}/>
    <Route path='/contact' element={<Input/>}/>
   </Routes>
  <UseReducerHook/>
  {/* <TodoApp/> */}
   </>
  )
}

export default App
