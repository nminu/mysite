import React  from 'react';
import '../Projects/projects.css'
import { Link } from 'react-router-dom';
import ProjParallaxComponent from '../Para/projpara.js';

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

        <ul className='pwrapper'>
            <li className='pcard'>
                <div className='poverlay'>
                    <div className='pinfo'>
                        <h1>
                            Synth
                        </h1>
                        <p>
                            This website is yeet
                        </p>
                        <button>

                        </button>
                    </div>
                </div>
            </li>

            <li className='pcard'>
                <div className='poverlay'>
                    <div className='pinfo'>
                        <h1>
                            Tooltensils
                        </h1>
                        <p>
                            This website is yeet
                        </p>
                        <button>

                        </button>
                    </div>
                </div>
            </li>

            <li className='pcard'>
                <div className='poverlay'>
                    <div className='pinfo'>
                        <h1>
                            Synth
                        </h1>
                        <p>
                            This website is yeet
                        </p>
                        <button>

                        </button>
                    </div>
                </div>
            </li>

        </ul>
        
        </main>
        </body>
    )}
};


export default Projects;