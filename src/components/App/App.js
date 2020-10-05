import React from 'react';
import FaceBox from '../Facebox/facebox';
import Para from '../Para/para.js'
import aboutme from '../../resources/aboutme.png'
import shape from '../../resources/transition.png'
import wire from '../../resources/wire.png'
import './App.css';
import Transition from '../parallaxtransition/paratrans';


function App() {

  return (
    <body className="Appbody">
      <FaceBox />

      <header className="App-header">

      </header>

      <main>
        

      <Para />

      <div className='aboutMe'>
        <div className ='information'>
          <div className='infopic'>
            <img src={aboutme}></img>
          </div>
          <div className='infocontent'>
            <div>
              <div className='line'></div>
              <div className='line line2'></div>
            </div>
            <div>
              <p className='infotext'> I yeet and yaat and definitely have yote. Test test test</p>
            </div>
            <button className='infobutton'>Read More</button>
          </div>
        </div>
      </div>
    <Transition />

      </main>

      <footer>
      </footer>

    </body>
  );
  
}

export default App;
