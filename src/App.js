import React from 'react';
import pic1 from './resources/pic1.jpg';
import selfpic from './resources/selfpic.jpg';
import './App.css';

function App() {
  return (
    <body className="App">
        <div className='imgbox'>
            <img src={selfpic} alt='yeet' width='100%'/>
         </div>
      <header className="App-header">
        <img src={pic1} alt='pic' width='100%' height ='200px'/>
      </header>
      <main>
        <section className = 'mainbox'>
          <p>
            yeet
          </p>
        </section>
      </main>
    </body>
  );
}

export default App;
