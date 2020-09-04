import React from 'react';
import backdrop2 from './resources/backdrop2.png';
import sun2 from './resources/sun2.png';
import selfpic from './resources/selfpic.png';
import test from './resources/test.png';
import backvid from './resources/backvid.mp4';
import './App.css';

function App() {
  return (
    <body className="App">
      <div className='imgbox'>
          <img src={selfpic} alt='yeet' width='100%'/>
          <p>Nicholas Minutillo</p>
      </div>
      <header className="App-header">
        <img src={backdrop2} alt='pic' width='100%' height ='350px'/>
        <img src={sun2} alt='pic' className='sun'/>
      </header>
      <video autoplay='autoplay' loop ='loop' muted className='backvideo'>
          <source src = {backvid} type = 'video/mp4' />
      </video>
      <main>
        <section className = 'mainbox'>
          <img src={test} alt='back' width='100%'/>
          <p>
            yeetsadfgasdgafdgdsgfdasgadgdsfgdfsgsgsdfgdsg
          </p>
        </section>
      </main>
    </body>
  );
}

export default App;
