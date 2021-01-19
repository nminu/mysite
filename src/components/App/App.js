import React from 'react';
import FaceBox from '../Facebox/facebox';
import Para from '../Para/para.js'
import aboutme from '../../resources/aboutbill2.png'
import myprojects from '../../resources/projbill2.png'
import test from '../../resources/2.jpg'
import contactimg from '../../resources/workimg.png'
import shape from '../../resources/transition.png'
import wire from '../../resources/wire.png'
import './App.css';
import Transition from '../parallaxtransition/paratrans';


function App() {

  return (
    <body className="Appbody">
      <meta name="viewport" content="width=device.width, initial-scale=0.5" />
      <FaceBox />

      <header className="App-header">

      </header>

      <main>
        

      <Para />
      <div className='stars'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      </div>

      <div className='aboutMe'>
        <div>

        </div>
          <div className='infopic'>
            <img src={aboutme} className='aboutimg'></img>
          </div>
      </div>

      <div className='myProjects'>
        <div>

        </div>
          <div className='infopic'>
            <img src={myprojects} className='projimg'></img>
          </div>
      </div>
      

      <Transition />

      </main>

      <footer>
        <div className='footer'>

          <p className='footertext gradient'>Thank you for visiting my site!</p>
          <p className='footertext2 gradient'>Please feel free to get in touch.</p>
        </div>
      </footer>

    </body>
  );
  
}

export default App;
