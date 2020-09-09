import React,{useState} from 'react';
import Aboutme from '../Aboutme/aboutme'
import './slider.css'

function Slider() {
    let sliderArr = [<Aboutme />,<Aboutme />,<Aboutme />];
    const [y, setY] = useState(0)
    const go1=() => {
        setY(0);
    }
    const go2=() => {
        setY(-100);
    }
    const go3=() => {
        setY(-200);
    }
    return (
        <div className='slider'>

            <button id="go1" onClick={go1}>1</button>
            <button id="go2" onClick={go2}>2</button>
            <button id="go3" onClick={go3}>3</button>

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