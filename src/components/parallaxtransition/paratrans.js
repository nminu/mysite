import React, { Component } from 'react'

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
            </div>
            <div className='wire'>
            </div>
            </div>
    )};
}