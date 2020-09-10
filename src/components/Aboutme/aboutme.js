import React from 'react';
import './aboutme.css';
import aboutme from "../../resources/aboutme.png";
import Fade from 'react-reveal/Fade'


class Aboutme extends React.Component {
    render () {
        return (
            <div className='maindiv'>
                <section className="box">
                    <img src={aboutme} alt="img01" width='450px' className='amimg'/>
                    <Fade bottom>
                    <p className='text'>I'm<span> Nick Minutillo</span>, a web developer based out of <span>Austin, TX</span>.
                            After living in Florida for most of my life I attended Penn State University and earned my engineering degree.
                            I enjoy coding, creating graphics in Photoshop, playing video games, and watching hockey (<span>LGR</span>).
                            This site was made mostly for fun but also to showcase a few of my skills. 
                            Feel free to contact me at (email) or by using the form below.
                        </p>
                    </Fade>
                </section>
            </div>
        );
    }
};

export default Aboutme;