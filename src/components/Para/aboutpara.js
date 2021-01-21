import React, { Component } from 'react';
import Parallax from 'parallax-js'
import aboutme from '../../resources/aboutme.png';

class AboutParallaxComponent extends Component {
    componentDidMount() {
        this.parallax = new Parallax(this.scene)
    }
    componentWillUnmount() {
        this.parallax.disable()
    }
    render () {

    return (
        <div className='aboutparabox' ref={el => this.scene = el} data-hover-only='true'>
            <div className ='aboutlogocontainer' data-depth="-0.08">
                <div className = 'aboutlogo'>
                    <img src={aboutme} className='aboutimage'></img>
                </div>
            </div>
        </div>

    )
}
}   

export default AboutParallaxComponent;