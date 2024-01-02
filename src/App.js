import React from 'react';
import Landing from './Components/landing';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Activities from './Components/Activities';
function App()
{
  return (
    <div >
      <Landing />
      <div className='flex flex-col space-y-8 bg-gradient-to-b from-slate-500 to-slate-200'>
      <About />
      <Skills />
      <Experience />
      <Activities />
      </div>
      
    </div>
      
    
  );
}

export default App;