import React from 'react';
import './facebox.css'
import selfpic from './resources/selfpic.png';

class FaceBox extends React.Component {
    render () {
        return (
        <div className='imgbox'>
            <img src={selfpic} alt='yeet' width='100%'/>
            <p>Nicholas Minutillo</p>
        </div>
    )}
};
export default FaceBox;