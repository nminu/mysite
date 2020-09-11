import React,{useState} from 'react';
import './buttons.css';
import projectimg from '../../resources/projectsimgT.png';
import aboutme from "../../resources/aboutme.png";
import workimg from '../../resources/workimg.png';

function Buttons () {

    const about = () => {
        document.getElementById('proj').style="opacity:0%;z-index:-1;"
        document.getElementById('work').style="opacity:0%;z-index:-1;"
        document.getElementById('about').style="width:30%;transform:translateX(10%);transition-delay:0.6s"
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
        <div className='aboutbox'>
            <p className='abouttext'>
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