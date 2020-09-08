import React, { useEffect } from 'react';
import './slider.css'
import tree from "../../resources/tree.png"
import Zoom from 'react-reveal/Zoom';

class Slider extends React.Component {
    render () {
        return (
            <div className='maindiv'>
                <section class="boxes">
                    <article class="cbp-so-side cbp-so-side-left">
                        <h2>Lemon drops</h2>
                        <p>I am a junior web developer and I love trying out and learning new things. This site is largely an experiment and a work in progress.</p>
                    </article>
                    <img src={tree} alt="img01" width='400px'/>
                </section>
                <section class="boxes">
                    <article class="cbp-so-side cbp-so-side-left">
                        <h2>Lemon drops</h2>
                        <p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>
                    </article>
                    <img src={tree} alt="img01" width='400px'/>
                </section>
                <section class="boxes">
                    <article class="cbp-so-side cbp-so-side-left">
                        <h2>Lemon drops</h2>
                        <p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>
                    </article>
                    <img src={tree} alt="img01" width='400px'/>
                </section>
            </div>
        );
    }
};

export default Slider;