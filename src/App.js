// import { useState } from 'react';
// import { Auth } from './component/auth';
// import { Route, Routes } from 'react-router-dom';
// import Home from './component/hooks/Home';
// import Profile from './component/hooks/Profile';
// import Contact from './component/hooks/Contact';

// function App() {
//   const [userName,setUserName]=useState("")
//   return (
//     <div>

//     <Routes>

//       <Route path='/' element={<Home/>}/>
//       <Route path='/profile' element={<Profile/>}/>
//       <Route path='/contact' element={<Contact/>}/>

//        {/* <Route path='/' element={<Auth/>}/> */}
//     </Routes>   
//      <Auth/>
//      {/* < Component1/>
//      < Component5/>   */}
//     </div>
    
//   );
// }

// export default App;

import React from 'react'
import { Auth } from './component/auth'

function App() {
  return (
    <div>
     <Auth/>
    </div>
  )
}

export default App

