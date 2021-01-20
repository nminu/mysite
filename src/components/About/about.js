import React from 'react';
import '../About/about.css'
import aboutme from '../../resources/aboutme.png'

class About extends React.Component {

    render () {
        return (
            <body className='Appbody'>
                <head>

                </head>

                <main>
                    <div className='abouthead'>
                        <div className ='logocontainer'>
                            <div className = 'aboutlogo'>
                                <img src={aboutme}></img>
                            </div>
                        </div>
                    </div>


                </main>


            </body>
    )}
};


export default About;