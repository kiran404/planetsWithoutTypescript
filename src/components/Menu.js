import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const Menu = () => {
    const location = useLocation();
    let planet = location.search.slice(6, location.search.length);
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className='title'>
                <span>THE PLANETS</span>
            </div>
            <div className='toggle' onClick={() => setToggle(!toggle)}>
                {
                    toggle ?
                        <i className='fa fa-times fa-2x' />
                        :
                        <i className='fa fa-bars fa-2x' />

                }
            </div>
            <ul className="menu">
                {planets.map((item, index) => {
                    return (
                        <li key={index} className={planet === item ? 'selected' : ''}>
                            <Link to={`/planets?name=${item}`
                            }>{item}</Link>
                        </li>
                    )
                })}
            </ul>
            <div className='sidebar' style={
                toggle ? {
                    right: '0'
                }
                    : null
            }>
                <ul className="side-menu">
                    {planets.map((item, index) => {
                        return (
                            <li key={index} className={planet === item ? 'selected' : ''}>
                                <Link to={`/planets?name=${item}`
                                }
                                    onClick={() => {
                                        setToggle(false)
                                    }}>{item}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
export default Menu;