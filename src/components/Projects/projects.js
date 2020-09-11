import React from 'react';
import './projects.css';
import projectimg from '../../resources/projectsimgT.png';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


class Projects extends React.Component {
    render () {
        return (
            <div className='projbox'>
            <Bounce left>
            <img src={projectimg} alt="img01" width='600px' className='projimg'/>
            </Bounce>
                <Fade bottom>
                <section className='proj'>
                    <h2 className='projtitle'>RetroSite</h2>
                    <p>
                    This portfolio site has been my first major solo project. It was built using React.js. 
                    All the graphics were made by me in Photoshop. 
                    I plan on adding more functionality and interactivity.   
                    </p>
                </section>
                </Fade>
                <Fade bottom>
                <section className='proj'>
                    <h2 className='projtitle'>Upcoming</h2>
                    <p>
                    This spot is for a project I am currently working on that will be finished soon. 
                    Check back soon if you like dice games ;)
                    </p>
                </section>
                </Fade>

            </div>
        );
    }
};

export default Projects;