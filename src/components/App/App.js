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
    <body className="Appbody" style = {{ backgroundImage: `url(${require("../../resources/mountainsungood.png")})` }} >

      <FaceBox />

      <header className="App-header">

      </header>

      <main>

        <section className = 'introbox'>
          <h1>WELCOME</h1>
          <p>
            I'm Nick Minutillo <br />
            Click below to read about me <br />
           Also check out some of my latest projects <br />
            Get in touch by email, or by using the form below
          </p>
        </section>

        <section className ='otherboxes'>

        </section>

      </main>

      <footer>

      </footer>

    </body>
  );
}

export default App;
