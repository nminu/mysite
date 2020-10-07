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
        this.setState({
          offset: window.pageYOffset
        });
      };
      
      render () {
          return (
            <div className = 'transition'>
            <div style= {{backgroundPositionY: this.state.offset / 6}} className='shape'>
            <div className='projects'>
        <div className ='information'>
          <div className='infopic'>
            <img src={projectimg} className='projimg'></img>
          </div>
          <div className='infocontent'>
            <div>
              <div className='line'></div>
              <div className='line line2'></div>
            </div>
            <div>
              <p className='infotext'> Check out some of my latest projects.</p>
            </div>
            <button className='infobutton'>Read More</button>
          </div>
        </div>
        <div className='rightpic'>
          <img src={test}></img>
        </div>
      </div>
            </div>
            <div className='wire'>
            </div>
            </div>
    )};
}