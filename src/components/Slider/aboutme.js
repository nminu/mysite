import React, { useEffect } from 'react';
import './aboutme.css'
import aboutme from "../../resources/aboutme.png"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

class Aboutme extends React.Component {
    render () {
        return (
            <div className='maindiv'>
                <section class="box">

                <img src={aboutme} alt="img01" width='400px' className='amimg'/>
                    <Fade bottom>
                        <p className='text'>I'm<span> Nick Minutillo</span>, a web developer based out of <span>Austin, TX</span>.
                            After living in Florida for most of my life I attended Penn State University and earned my engineering degree.
                            I enjoy coding websites and games, creating graphics in Photoshop, playing video games, and watching hockey (<span>LGR</span>).
                            This site was made mostly for fun but also to showcase a few of my skills.
                            It's largely a work in progress and I have a few exciting plans for it.
                        </p>
                    </Fade>
                </section>
            </div>
        );
    }
};

export default Aboutme;