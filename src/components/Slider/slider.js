import React from 'react';
import './slider.css'

class Slider extends React.Component {
    render () {
        return (
            <div class="content-width">
            <div class="slideshow">
              <div class="slideshow-items">
                <div class="item">
                  <div class="item-image-container">
                    <img class="item-image" />
                  </div>
                  <div class="item-header">
                    <span class="vertical-part"><b>About Me</b></span>
                  </div>
                  <div class="item-description">
                    <span class="vertical-part">
                      <b>this is a description and will fill in the about me section with info about me</b>
                    </span>  
                  </div>
                </div>
                <div class="item">
                  <div class="item-image-container">
                    <img class="item-image" />
                  </div>
                  <div class="item-header">
                    <span class="vertical-part"><b>Projects</b></span>
                  </div>
                  <div class="item-description">
                    <span class="vertical-part">
                      <b>this is a description and will fill in the projecty section with info about projects</b>
                    </span>
                  </div>
                </div>
                <div class="item">
                  <div class="item-image-container">
                    <img class="item-image" />
                  </div>
                  <div class="item-header">
                    <span class="vertical-part"><b>Work</b></span>
                  </div>
                  <div class="item-description">
                    <span class="vertical-part">
                      <b>this is a description and will fill in the work section with info about my work</b>
                    </span>
                  </div>
                </div>
              </div>
              <div class="controls">
                <ul>
                  <li class="control" data-index="0"></li>
                  <li class="control" data-index="1"></li>
                  <li class="control" data-index="2"></li>
                </ul>
              </div>
            </div>
          </div>
    )}
};

export default Slider;