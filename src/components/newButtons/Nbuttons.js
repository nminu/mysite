import React,{useState} from 'react';
import './Nbuttons.css';
import projectimg from '../../resources/projectsimgT.png';
import aboutme from "../../resources/aboutme.png";
import workimg from '../../resources/workimg.png';

function Nbuttons () {

    const about = () => {

    }
    const proj = () => {
        
    }
    const work = () => {
        
    }
    
    return (
    <div className='alldiv'>
        <div className='btnholder'>
            <div className='btn'>
                <input type='image' src={aboutme} id="aboutimg" onClick={about}></input>
            </div>
            <div className='btn'>
                <input type='image' src={projectimg} id="projimg" onClick={proj}></input>
            </div>
            <div className='btn'>
                <input type='image' src={workimg} id="contactimg" onClick={work}></input>
            </div>
        </div>

        <div id='aboutcont' className='content'>

        </div>

        <div id='projcont' className='content'>

        </div>

        <div id='contactcont' className='content'>
            
        </div>

    </div>
    );
}

export default Nbuttons;