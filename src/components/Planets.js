import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import planets from '../db/planets.db';

export default function Planets() {
    const location = useLocation();
    const [subNav, setSubNav] = useState('overview')
    const [planet, setPlanet] = useState('earth');
    useEffect(() => {
        // console.log('location->', location.search.slice(5, location.search.length))
        setPlanet(location.search.slice(6, location.search.length));
        // { { location.string.length === 0 ? setPlanet('venus') : setPlanet('jupitor'); } }

    }, [location])
    return (
        <div className="info">
            <div className="img-desc">
                <div className="imgPlanet"
                    style={{
                        "backgroundImage": `url('/${planet}.png')`
                    }}>
                </div>
                <div className="planetDescription">
                    <h2>{planet}</h2>
                    {/* {console.log('Planets >> ', planets)}
                    {console.log('Planet >> ', planet)} */}
                    <p style={{
                        minHeight: '100px',
                    }}>{subNav === 'internal' ? planets[planet.toLowerCase()].internal
                        : subNav === 'surface' ? planets[planet.toLowerCase()].surface
                            : planets[planet.toLowerCase()].overview
                        }</p>
                    {/* if(location.string.length) */}

                    <div className="butons">
                        <div ><button className={`button1 ${subNav === 'overview' ? 'highlight' : ''}`} onClick={() => setSubNav('overview')}>Overview</button> </div>
                        <div ><button className={`button1 ${subNav === 'internal' ? 'highlight' : ''}`} onClick={() => setSubNav('internal')}>Internal Structure</button> </div>
                        <div ><button className={`button1 ${subNav === 'surface' ? 'highlight' : ''}`} onClick={() => setSubNav('surface')}>Surface Geology</button> </div>

                    </div>

                </div>
            </div>
            <div className="footer">
                <div className="buttons">
                    <div className="buttonTitle">
                        Rotation Time
                    </div>
                    <div className="buttonDesc">
                        {planets[planet.toLocaleLowerCase()].rotation}
                    </div>
                </div>
                {/*  */}
                <div className="buttons">
                    <div className="buttonTitle">
                        Revolution Time
                    </div>
                    <div className="buttonDesc">
                        {planets[planet.toLocaleLowerCase()].revolution}
                    </div>
                </div>
               
                <div className="buttons">
                    <div className="buttonTitle">
                        Radius
                    </div>
                    <div className="buttonDesc">
                        {planets[planet.toLocaleLowerCase()].radius}
                    </div>
                </div>
                {/*  */}
                <div className="buttons">
                    <div className="buttonTitle">
                        Average Temp.
                    </div>
                    <div className="buttonDesc">
                        {planets[planet.toLocaleLowerCase()].avgTemp}
                    </div>
                </div>

            </div>
        </div>
    )
}