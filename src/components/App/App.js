import React from 'react';
import backdrop2 from '../../resources/backdrop2.png';
import sun2 from '../../resources/sun2.png';
import background from '../../resources/background.png'
import FaceBox from '../Facebox/facebox';
import Slider from '../Slider/slider'
import test from '../../resources/test.png';
import backvid from '../../resources/backvid.mp4';
import './App.css';

function App() {
  return (
    <body className="Appbody" style = {{ backgroundImage: `url(${require("../../resources/background.png")})` }} >
      <FaceBox />
      <header className="App-header">
        <img src={backdrop2} alt='pic' width='100%' height ='350px'/>
        <img src={sun2} alt='pic' className='sun'/>
      </header>
      <main>
        <section className = 'mainbox'>
          <article>
            <h1>Welcome</h1>
            <p>
              I'm Nick Minutillo, I'm a mostly self-taught web developer always seeking to advance my knowlege and skills. 
              <br />
              <br />
              I made this funky site mostly for fun, but also to showcase some of my skills, work and projects.
            </p>
          </article>
          <Slider />
        </section>
      </main>
    </body>
  );
}

export default App;
