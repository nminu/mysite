import React from 'react';
import backdrop2 from '../../resources/backdrop2.png';
import sun2 from '../../resources/sun2.png';
import FaceBox from '../Facebox/facebox';
import trees from '../../resources/treebottom.png'
import pink from '../../resources/linetest2.png'
import Slider from '../Slider/slider';
import './App.css';
import Buttons from '../Buttons/buttons';

function App() {
  return (
    <body className="Appbody" style = {{ backgroundImage: `url(${require("../../resources/mountainsungood.png")})` }} >

      <FaceBox />

      <header className="App-header">

      </header>

      <main>

        <section className = 'introbox'>
          <h1>Welcome</h1>
          <p className='introtext'>
            <span className='gradient'>I'm Nick Minutillo</span> <br />
            <span className='gradient'>Click below to read about me</span> <br />
            <span className='gradient'>Also check out some of my latest projects</span> <br />
            <span className='gradient'>Get in touch by email, or by using the form below</span>
          </p>
        </section>

        <section className ='otherboxes'>
          <Buttons />
        </section>

      </main>

      <footer>
      <img src={trees} className='trees'></img>
      </footer>

    </body>
  );
}

export default App;
