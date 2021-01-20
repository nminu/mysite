import React from 'react';
import '../About/about.css'
import { Link } from 'react-router-dom';
import aboutme from '../../resources/aboutme.png'

class About extends React.Component {

    render () {
        return (
            <body className='aboutbody'>
                <head>

                </head>

                <main>
                    <div className='abouthead'>
                        <div className ='logocontainer'>
                            <div className = 'aboutlogo'>
                                <img src={aboutme} className='aboutimage'></img>
                            </div>
                        </div>
                    </div>


                    <div className ='aboutmain'>
                        <div className ='picbox'>

                        </div>

                        <div className ='abouttextbox'>

                        </div>
                    </div>


                </main>

                <div class="suncontainer">

                    <Link to="/">
                        <div class="sunbuttontext">
                            <span>Home</span>
                        </div>
                        <div class="risingsun">
                        </div>
                    </Link>

                </div>

            </body>
    )}
};


export default About;