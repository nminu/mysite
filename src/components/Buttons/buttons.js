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

        if (abtop === '0') {
            projelem.style="opacity:0%;transform:translateY(250%);"
            workelem.style="opacity:0%;transform:translateY(300%);"
            aboutelem.style="width:25%;transform:translateX(10%);transition-delay:0.6s"
            abtxtelem.style="opacity:100%;transform:translateX(240%);"
        } else if (abtop === "1")  {
            projelem.style="opacity:100%;transform:translateY(0%);transition: transform 0.8s 1.25s, opacity 0.7s 1.5s;"
            workelem.style="opacity:100%;transform:translateY(0%);transition: transform 0.8s 1.25s, opacity 0.7s 1.5s;"
            aboutelem.style="width:20%;transform:translateX(10%);transition-delay:1s"
            abtxtelem.style="opacity:0%;transform:translateX(-240%);transition: transform 1.5s 0.25s, opacity 0.5s 0s;"
        }

    }
    const proj = () => {
        const projelem = document.getElementById('proj');
        const aboutelem = document.getElementById('about');
        const workelem = document.getElementById('work');
        const projtxtelem = document.getElementById('projtxt');

        var projop = window.getComputedStyle(projtxtelem).getPropertyValue("opacity");

        if (projop === '0') {
            aboutelem.style="opacity:0%;transform:translateY(150%);transition:transform 1s 2s opacity 0.8s 0s"
            workelem.style="opacity:0%;transform:translateY(300%);"
            projelem.style="width:40%;transform:translateX(-70%);transition-delay:0.6s"
            projtxtelem.style="opacity:100%;transform:translate(80%, -310%);"
        } else if (projop === "1")  {
            projelem.style="opacity:100%;transform:translateY(0%);transition-delay:1s"
            workelem.style="opacity:100%;transform:translateY(0%);transition: transform 0.8s 1.25s, opacity 0.7s 1.5s;"
            aboutelem.style="width:25%;transform:translateX(10%);transition: transform 0.8s 1.25s, opacity 0.7s 1.5s;"
            projtxtelem.style="opacity:0%;transform:translateX(-240%);transition: transform 1.5s 0.25s, opacity 0.5s 0s;"
        }
    }
    const work = () => {
        const projelem = document.getElementById('proj');
        const aboutelem = document.getElementById('about');
        const workelem = document.getElementById('work');
        const worktxtelem = document.getElementById('worktxt');

        var workop = window.getComputedStyle(worktxtelem).getPropertyValue("opacity");

        if (workop === '0') {
            aboutelem.style="opacity:0%;transform:translateY(180%);"
            projelem.style="opacity:0%;transform:translateY(250%);"
            workelem.style="width:30%;transform:translate(-32%, 10%);"
            worktxtelem.style="opacity:100%;transform:translate(-20%, -270%);"
        } else if (workop === "1")  {
            workelem.style="opacity:100%;transform:translateY(0%);transition-delay:1s"
            projelem.style="opacity:100%;transform:translateY(0%); transition: transform 0.8s 1.25s, opacity 0.7s 1.5s;"
            aboutelem.style="transform:translateX(10%);transition: transform 0.8s 1.25s, opacity 0.7s 1.5s;"
            worktxtelem.style="opacity:0%;transform:translate(55%, -250%);transition: transform 1.5s 0.25s, opacity 0.5s 0s;"
        }
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
        <div id='projtxt' className='projbox'>
            <section className='proj'>
                <h2 className='projtitle'>RetroSite</h2>
                <p>
                    This portfolio site has been my first major solo project. It was built using React.js. 
                    All the graphics were made by me in Photoshop. 
                    I plan on adding more functionality and interactivity.   
                </p>
            </section>
            <section className='proj'>
                <h2 className='projtitle'>Upcoming</h2>
                <p>
                    This spot is for a project I am currently working on that will be finished soon. 
                    Check back soon if you like dice games ;)
                </p>
            </section>
        </div>
        <div id='worktxt' className='workbox'>
            <section className='work'>
                    <h2 className='worktitle'>ToolTensils</h2>
                    <p>
                    I developed and currently manage a WordPress ecommerce site for a small business with a cool product. Click the image to check out the site! 
                    </p>
            </section>
            <a href='https://tooltensils.com/'><iframe src='https://tooltensils.com/' title='Tooltensils' className='embedsite'></iframe></a>
        </div>
    </div>
    );
}

export default Buttons;