import React from 'react';
import './work.css';
import workimg from '../../resources/workimg.png';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';



class Work extends React.Component {
    render () {
        return (
            <div className='workbox'>
            <Flip left>
            <img src={workimg} alt="img01" width='600px' className='workimg'/>
            </Flip>
            <Fade bottom>
                <section className='work'>
                    <h2 className='worktitle'>ToolTensils</h2>
                    <p>
                    I developed and manage an ecommerce site for a small business with a cool product. Click the image to check out the site! 
                    </p>
                </section>
                <embed src='https://tooltensils.com/' className='embedsite'></embed>
            </Fade>
            </div>
        );
    }
};

export default Work;