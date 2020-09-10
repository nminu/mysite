import React from 'react';
import './facebox.css'
import selfpic from '../../resources/selfpic.png';

class FaceBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          date: new Date().toLocaleString()
        };
      }
    render () {
        return (
        <div className='imgbox'>
        <img src={selfpic} alt='yeet' width='100%'/>
        <p>{this.state.date}
        <br />
        Austin, TX
        </p>
        </div>
    )}
};
export default FaceBox;
