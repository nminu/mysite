import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route, Link } from 'react-router-dom';
import FaceBox from '../Facebox/facebox';
import Para from '../Para/para.js';
import Contact from '../Contact/contact.js'
import aboutme from '../../resources/aboutbill2.png';
import aboutme2 from '../../resources/aboutbill3.png';
import myprojects from '../../resources/projbill2.png';
import myprojects2 from '../../resources/projbill3.png';
import Transition from '../parallaxtransition/paratrans';
import '../Home/home.css'

class Home extends React.Component {
render () {
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
            <Link to="/about"><img src={aboutme} className='aboutimg' onMouseOver={e => (e.currentTarget.src = aboutme2)} onMouseOut={e => (e.currentTarget.src = aboutme)} alt='aboutme billboard'></img></Link>
              </div>
          </div>
    
          <div className='myProjects'>
            <div>
    
            </div>
              <div className='infopic'>
                <Link to="/projects"><img src={myprojects} className='projimg' onMouseOver={e => (e.currentTarget.src = myprojects2)} onMouseOut={e => (e.currentTarget.src = myprojects)} alt='projects billboard'></img></Link>
              </div>
          </div>
    
          <Transition />

          </main>
          <Contact />
          <footer>

            <div className='footer'>

    
              <p className='footertext gradient'>Thank you for visiting my site!</p>
              <p className='footertext2 gradient'>Please feel free to get in touch.</p>
            </div>
          </footer>
    
        </body>
      )};
};


export default Home;