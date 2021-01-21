import React  from 'react';
import '../Projects/projects.css'
import { Link } from 'react-router-dom';
import ProjParallaxComponent from '../Para/projpara.js';
import sunthumb from '../../resources/sunthumb.png'
import ttthumb from '../../resources/tooltensilsthumb.png'
import placeholder from '../../resources/placeholderthumb.png'
import topbar from '../../resources/topbar.png'

class Projects extends React.Component {

    render () {
        return (
        <body className='projectbody'>
            <head></head>
        <main>
            <div className='projhead'>
                <ProjParallaxComponent />
            </div>

                    <div class="suncontainer">
                <Link to="/">
                    <div class="sunbuttontext">
                    <span>Home</span>
                    </div>
                    <div class="risingsun"></div>
                </Link>
                    </div>
        <div className='centered'>

        <div className='projwrapper'>
            <header>
                <h1>Web Developer Portfolio</h1>
                <h2>This page features some of my latest web and software development projects. I have a few WIP projects so this page should soon be updated.</h2>
            </header>

        <ul className='pbox'>
            <li className='pcard'>
                <div className ='content'>
                <img src = {sunthumb}></img>
                <div className='poverlay'>
                    <div className='pinfo'>
                        <h1>
                            Retro Portfolio
                        </h1>
                        <p>
                            This site is one of my first major projects. Built using React.js and featuring serveral custom graphics, this site serves as my main web development portfolio.
                        </p>
                    </div>
                </div>
                </div>
            </li>

            <li className='pcard'>
                <div className ='content'>
                <img src = {ttthumb}></img>
                <div className='poverlay'>
                    <div className='pinfo'>
                        <h1>
                            Tooltensils inc.
                        </h1>
                        <p>
                            This is an ecommerce site that was built on Wordpress. I manage and maintain this site for a small business.
                        </p>
                    </div>
                </div>
                </div>
            </li>

            <li className='pcard'>
                <div className ='content'>
                <img src = {placeholder}></img>
                <div className='poverlay'>
                    <div className='pinfo'>
                        <h1>
                            Upcomming
                        </h1>
                        <p>
                            One of my few WIP projects. Check back soon for this project to be updated on this site.
                        </p>
                    </div>
                </div>
                </div>
            </li>

            <li className='pcard'>
                <div className ='content'>
                <img src = {placeholder}></img>
                <div className='poverlay'>
                    <div className='pinfo'>
                        <h1>
                        Upcomming
                        </h1>
                        <p>
                        One of my few WIP projects. Check back soon for this project to be updated on this site.
                        </p>
                    </div>
                </div>
                </div>
            </li>
            

        </ul>
        </div>

        </div>

        <div className='bottomtext'>
            <h2>Let's chat</h2>
            <p>Want to get in touch or talk about a project?<br />
            Email me at <b>website@email.com</b> <br />
            Or by using the form <b>here</b>.</p>
            
        </div>
        
        </main>
        </body>
    )}
};


export default Projects;