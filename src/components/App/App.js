import React from 'react';
import backdrop2 from '../../resources/backdrop2.png';
import sun2 from '../../resources/sun2.png';
import background from '../../resources/background.png'
import FaceBox from '../Facebox/facebox';
import Aboutme from '../Slider/aboutme'
import test from '../../resources/test.png';
import backvid from '../../resources/backvid.mp4';
import trees from '../../resources/treecar.png'
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
        <section className = 'introbox'>
          <article>
            <h1>Welcome</h1>
            <p>
              I'm Nick Minutillo, I'm a mostly self-taught junior web developer. Please check out my site and feel free to contact me with any comments or questions.
              <br />
            </p>
          </article>
        </section>
        <img src={trees} alt='tree' className='tree' />
        <section className ='otherboxes'>
          <Aboutme />
        </section>
      </main>
    </body>
  );
}

export default App;
