import React from 'react';
import './work.css';
import workimg from '../../resources/workimg.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



class Work extends React.Component {
    render () {
        return (
            <div className='workbox'>
            <Zoom left>
            <img src={workimg} alt="img01" width='400px' className='workimg'/>
            </Zoom>
            <Fade bottom>
                <section className='work'>
                    <h2 className='worktitle'>ToolTensils</h2>
                    <p>
                    I developed and currently manage a WordPress ecommerce site for a small business with a cool product. Click the image to check out the site! 
                    </p>
                </section>
                <a href='https://tooltensils.com/'><iframe src='https://tooltensils.com/' title='Tooltensils' className='embedsite'></iframe></a>
            </Fade>
            </div>
        );
    }
};

export default Work;