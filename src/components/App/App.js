import React from 'react';
import FaceBox from '../Facebox/facebox';
import Para from '../Para/para.js'
import aboutme from '../../resources/aboutme.png'
import test from '../../resources/2.jpg'
import contactimg from '../../resources/workimg.png'
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
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
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
              <p className='infotext'> I'm Nick Minutillo, click on the right to read a little about me</p>
            </div>
            <button className='infobutton'>Read More</button>
          </div>
        </div>
        <div className='rightpic'>
          <img src={test}></img>
        </div>
      </div>
      <Transition />

      <div className='contact'>
        <div className ='information'>
          <div className='infopic'>
            <img src={contactimg} className='contactimg'></img>
          </div>
          <div className='infocontent'>
            <div>
              <div className='line'></div>
              <div className='line line2'></div>
            </div>
            <div>
              <p className='infotext'> Please fill out the form to contact me! Or email me at: contact@minutillo.com</p>
            </div>
            <button className='infobutton'>Read More</button>
          </div>
        </div>
        <div className='rightpic'>
          <img src={test}></img>
        </div>
      </div>

      </main>

      <footer>
        <div className='footer'></div>
      </footer>

    </body>
  );
  
}

export default App;
