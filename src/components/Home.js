import React, { useEffect, useState } from 'react';
import Planets from '../components/Planets'
import planet from '../db/planets.db';

const Home = () => {
    return (
        <div>
            <Planets />
        </div>
    )
}

export default Home;

{/* <div className="mainContainer">
            <div className="pic-desc">
                <div className="imageOfPlanet"
                    style={{
                        "backgroundImage": `url('/earth.png')`
                    }}>

                </div>
                <div className="desc">
                    <h1> {this.props.match.params.id}</h1>
                    <p>There are 8 planets in the solar system</p>
                </div>
            </div>
            <div className="footer">

            </div>
        </div> */}