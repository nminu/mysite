import React,{useState} from 'react';
import './Nbuttons.css';
import projectimg from '../../resources/projectsimgT.png';
import aboutme from "../../resources/aboutme.png";
import workimg from '../../resources/workimg.png';

function Nbuttons () {
    function displaynone (element1, element2) {
        element1.style="display:none;"
        element2.style="display:none;"
    }
    const about = () => {
        const aboutcontent = document.getElementById('aboutcont');
        const projectimg = document.getElementById('projectimg');
        const aboutimgholder = document.getElementById('aboutimgholder');
        const contactimg = document.getElementById('contactimg');
        const aboutimg = document.getElementById('aboutimg')

        projectimg.style="opacity:0%;"
        contactimg.style="opacity:0%;"
        aboutimg.style='width:100%'
        aboutimgholder.style='transform:translateX(33vw);'
        setTimeout(displaynone, 600, projectimg, contactimg);
        aboutcontent.style="transform:translateY(0%);"
    }
    const proj = () => {
        const projectcontent = document.getElementById('projcont');
        const projectimg = document.getElementById('projectimg');
        const aboutimg = document.getElementById('aboutimg');
        const contactimg = document.getElementById('contactimg');

        contactimg.style="opacity:0%;"
        aboutimg.style='opacity:0%;'
        projectimg.style='width:100%'
        setTimeout(displaynone, 600, aboutimg, contactimg);
        projectcontent.style="transform:translateY(-100%);"
    }
    const contact = () => {
        const contactcontent = document.getElementById('contactcont');
        const projectimg = document.getElementById('projectimg');
        const aboutimg = document.getElementById('aboutimg');
        const contactimg = document.getElementById('contactimg');
        const contactimgholder = document.getElementById('contactimgholder');

        aboutimg.style="opacity:0%;"
        projectimg.style="opacity:0%;"
        contactimg.style='width:100%'
        contactimgholder.style='transform:translateX(-33vw);'
        setTimeout(displaynone, 600, aboutimg, projectimg);
        contactcontent.style="transform:translateY(-200%);"
    }
    
    return (
    <div className='alldiv'>
        <div className='btnholder'>
            <div id='aboutimgholder' className='btn'>
                <input type='image' src={aboutme} id="aboutimg" onClick={about}></input>
            </div>
            <div id='projectimgholder' className='btn'>
                <input type='image' src={projectimg} id="projectimg" onClick={proj}></input>
            </div>
            <div id='contactimgholder' className='btn'>
                <input type='image' src={workimg} id="contactimg" onClick={contact}></input>
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