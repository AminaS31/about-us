import React, { useState } from 'react'

import Header from './components/header/Header'


import AboutCardWrapper from './components/aboutCards/AboutCardWrapper';


function App() {
  const [about,setAbout]=useState(null);
  let onAboutSelect=(about)=>{
    setAbout(about)
  }
  return( <div>
    <Header onAboutSelect={onAboutSelect}></Header>
    <AboutCardWrapper selectedAbout={about}/>
  
   </div>
  )
}

export default App;
