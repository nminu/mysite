import React,{useState} from 'react';
import './buttons.css';
import projectimg from '../../resources/projectsimgT.png';
import aboutme from "../../resources/aboutme.png";
import workimg from '../../resources/workimg.png';

function Buttons () {

    const about = () => {
        const projelem = document.getElementById('proj');
        const aboutelem = document.getElementById('about');
        const workelem = document.getElementById('work');
        const abtxtelem = document.getElementById('abtxt');

        var abtop = window.getComputedStyle(abtxtelem).getPropertyValue("opacity");

        console.log(abtop);

        if (abtop === '0') {
            projelem.style="opacity:0%;transform:translateY(250%);"
            workelem.style="opacity:0%;transform:translateY(300%);"
            aboutelem.style="width:30%;transform:translateX(10%);transition-delay:0.6s"
            abtxtelem.style="opacity:100%;transform:translateX(240%);"
        } else if (abtop === "1")  {
            projelem.style="opacity:100%;transform:translateY(0%);transition-delay:1s"
            workelem.style="opacity:100%;transform:translateY(0%);transition-delay:1s"
            aboutelem.style="width:25%;transform:translateX(10%);transition-delay:1s"
            abtxtelem.style="opacity:0%;transform:translateX(-240%);transition: transform 1.5s 0.25s, opacity 0.5s 0s;"
        }

    }
    const proj = () => {
        
    }
    const work = () => {
        
    }
    
    return (
    <div className='mainbuttondiv'>
        <div className='btnholder'>
            <input type='image' src={aboutme} id="about" onClick={about}></input>
            <input type='image' src={projectimg} id="proj" onClick={proj}></input>
            <input type='image' src={workimg} id="work" onClick={work}></input>
        </div>
        <div className='abtbox'>
        <p id='abtxt' className='abouttext'>
                I'm<span> Nick Minutillo</span>, a web developer based out of <span>Austin, TX</span>.
                After living in Florida for most of my life I attended Penn State University and earned my engineering degree.
                I enjoy coding, creating graphics in Photoshop, playing video games, and watching hockey (<span>LGR</span>).
                This site was made mostly for fun but also to showcase a few of my skills. 
                Feel free to contact me at (email) or by using the form below.
            </p>
        </div>
    </div>
    );
}

export default Buttons;