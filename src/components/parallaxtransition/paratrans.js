import React, { Component } from 'react'
import projectimg from '../../resources/projectsimgT.png'
import test from '../../resources/2.jpg'

export default class Transition extends React.Component {
    constructor() {
        super()

        this.state = {
            offset: 0
        };
    };

    componentDidMount() {
        window.addEventListener('scroll', this.parallaxTrans);
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.parallaxTrans);
      }


    parallaxTrans = () => {
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;  
      console.log(scrollTop);
      console.log(this.state.offset)
      if(scrollTop < 3500 && scrollTop > 900) {
      this.setState({
          offset: (-window.pageYOffset + 3500)
        });
      };
    }
      
      render () {
          return (
            <div className = 'transition'>
            <div style= {{backgroundPositionY: -(this.state.offset / 10)}} className='pbback'>
            </div>
            <div style= {{backgroundPositionY: this.state.offset / 6}} className='pbmid'>
            </div>
            <div style= {{backgroundPositionY: this.state.offset / 3}} className='pbfront'>
            </div>
            <div style= {{backgroundPositionY: this.state.offset / 2}} className='pbbush'>
            </div>
            </div>
    )};
}