import React from 'react';
import backdrop2 from '../../resources/backdrop2.png';
import sun2 from '../../resources/sun2.png';
import FaceBox from '../Facebox/facebox';
import trees from '../../resources/treecar.png'
import Slider from '../Slider/slider';
import './App.css';
import Buttons from '../Buttons/buttons';

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
        <h1>WELCOME</h1>
        </section>

        <section className ='otherboxes'>
          <Slider />
        </section>

        <img src={trees} alt='tree' className='tree' />

      <Buttons />
      </main>
    </body>
  );
}

export default App;
