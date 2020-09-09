import React,{useState} from 'react';
import Aboutme from '../Aboutme/aboutme'
import './slider.css'

function Slider() {
    let sliderArr = [<Aboutme />,<Aboutme />,<Aboutme />];
    const [y, setY] = useState(0)
    const go1=() => {
        setY(0);
        document.getElementById('go1').className='active';
        document.getElementById('go2').className='inactive';
        document.getElementById('go3').className='inactive';
    }
    const go2=() => {
        setY(-100);
        document.getElementById('go1').className='inactive';
        document.getElementById('go2').className='active';
        document.getElementById('go3').className='inactive';
    }
    const go3=() => {
        setY(-200);
        document.getElementById('go1').className='inactive';
        document.getElementById('go2').className='inactive';
        document.getElementById('go3').className='active';
    }
    return (
        <div className='slider'>

            <button id="go1" onClick={go1} className='active'></button>
            <button id="go2" onClick={go2} className='inactive'></button>
            <button id="go3" onClick={go3} className='inactive'></button>

            {sliderArr.map((item,index) => {
                return (
                    <div key={index} className='slide' style={{transform:`translateY(${y}%)`}}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

export default Slider;