import React from 'react';
import './Nbuttons.css';
import projectimg from '../../resources/projectsimgT.png';
import aboutme from "../../resources/aboutme.png";
import workimg from '../../resources/workimg.png';

function Nbuttons () {
    function displaynone (element1, element2) {
        element1.style="display:none;"
        element2.style="display:none;"
    }
    function displayall (element1, element2) {
        element1.style="display:initial;"
        element2.style="display:initial;"
    }
    const about = () => {
        const aboutcontent = document.getElementById('aboutcont');
        const projectimg = document.getElementById('projectimg');
        const aboutimgholder = document.getElementById('aboutimgholder');
        const contactimg = document.getElementById('contactimg');
        const aboutimg = document.getElementById('aboutimg');

        var abtop = window.getComputedStyle(aboutcontent).getPropertyValue("opacity");

        if (abtop === '0') {
            projectimg.style="opacity:0%;"
            contactimg.style="opacity:0%;"
            aboutimg.style='width:100%'
            aboutimgholder.style='transform:translateX(33vw);'
            setTimeout(displaynone, 600, projectimg, contactimg);
            aboutcontent.style="transform:translateY(0%); opacity: 100%;transition: transform 0.8s 1s"
        } else if (abtop === '1') {
            projectimg.style="opacity:0%;transition: opacity 0.7s 1.5s;"
            contactimg.style="opacity:0%;transition: opacity 0.7s 1.5s;"
            aboutimg.style='width:80%;transition: width 0.5s 0.5s;'
            setTimeout(displayall, 1200, projectimg, contactimg);
            aboutimgholder.style='transform:translateX(0vw);transition: transform 0.5s 0.5s;'
            aboutcontent.style="transform:translateY(100%); opacity: 0%; transition: transform 1s 0s, opacity 0.5s 0s;"
        }


    }
    const proj = () => {
        const projectcontent = document.getElementById('projectcont');
        const projectimg = document.getElementById('projectimg');
        const aboutimg = document.getElementById('aboutimg');
        const contactimg = document.getElementById('contactimg');

        var projop = window.getComputedStyle(projectcontent).getPropertyValue("opacity");

        if (projop === '0') {
            contactimg.style="opacity:0%;"
            aboutimg.style='opacity:0%;'
            projectimg.style='width:100%'
            setTimeout(displaynone, 600, aboutimg, contactimg);
            projectcontent.style="transform:translateY(-100%); opacity: 100%; transition: transform 0.7s 0.5s"
        } else if (projop === '1') {
            contactimg.style="opacity:0%;transition: opacity 0.7s 1.5s;"
            aboutimg.style='opacity:0%;transition: opacity 0.7s 1.5s;'
            projectimg.style='width:80%;transition: width 0.5s 0.5s;'
            setTimeout(displayall, 1200, aboutimg, contactimg);
            projectcontent.style="transform:translateY(100%); opacity: 0%; transition: transform 1s 0s, opacity 0.5s 0s;"
        }
    }
    const contact = () => {
        const contactcontent = document.getElementById('contactcont');
        const projectimg = document.getElementById('projectimg');
        const aboutimg = document.getElementById('aboutimg');
        const contactimg = document.getElementById('contactimg');
        const contactimgholder = document.getElementById('contactimgholder');

        var contactop = window.getComputedStyle(contactcontent).getPropertyValue("opacity");

        if (contactop === '0') {
            aboutimg.style="opacity:0%;"
            projectimg.style="opacity:0%;"
            contactimg.style='width:100%'
            contactimgholder.style='transform:translateX(-33vw);'
            setTimeout(displaynone, 600, aboutimg, projectimg);
            contactcontent.style="transform:translateY(-200%);opacity: 100%; transition: transform 0.7s 0.8s"
        } else if (contactop === '1') {
            aboutimg.style="opacity:0%;transition: opacity 0.7s 1.5s;"
            projectimg.style="opacity:0%;transition: opacity 0.7s 1.5s;"
            contactimg.style='width:80%;transition: width 0.5s 0.5s;'
            contactimgholder.style='transform:translateX(0vw);transition: transform 0.5s 0.5s;'
            setTimeout(displayall, 1200, aboutimg, projectimg);
            contactcontent.style="transform:translateY(100%);opacity: 0%; transition: transform 1s 0s, opacity 0.5s 0s;"
        }


    }
    
    return (
    <div className='alldiv'>
        <div className='btnholder'>
            <div id='aboutimgholder' className='btn'>
                <input type='image' src={aboutme} id="aboutimg" onClick={about} alt='about'></input>
            </div>
            <div id='projectimgholder' className='btn'>
                <input type='image' src={projectimg} id="projectimg" onClick={proj} alt='project'></input>
            </div>
            <div id='contactimgholder' className='btn'>
                <input type='image' src={workimg} id="contactimg" onClick={contact} alt='contact'></input>
            </div>
        </div>

        <div id='aboutcont' className='content'>
            <p className='aboutp'>I'm Nick Minutillo, a self-taught web developer based out of beautiful Austin, TX. 
                After living in South Florida for most of my life I attended Penn State University where I earned my engineering degree. 
                I enjoy coding, playing video games, playing sports outside, and watching hockey (LGR). 
                I made this site to showcase a few of my skills and to have some fun. Please feel free to contact me any time at (email) or by using the form on this site.
            </p>
        </div>

        <div id='projectcont' className='content'>

        </div>

        <div id='contactcont' className='content'>
            
        </div>

    </div>
    );
}

export default Nbuttons;