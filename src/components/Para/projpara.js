import React, { Component } from 'react';
import Parallax from 'parallax-js'
import project from '../../resources/projectsimgT.png';

class ProjParallaxComponent extends Component {
    componentDidMount() {
        this.parallax = new Parallax(this.scene)
    }
    componentWillUnmount() {
        this.parallax.disable()
    }
    render () {

    return (
        <div className='projparabox' ref={el => this.scene = el} data-hover-only='true'>
            <div className ='projlogocontainer' data-depth="-0.08">
                <div className = 'projlogo'>
                    <img src={project} className='projectimage'></img>
                </div>
            </div>
        </div>

    )
}
}   

export default ProjParallaxComponent;