import React, { Component, Fragment } from 'react';

const NavBarSection = (props) => {
    return (
        <Fragment>
            <p className="navbar-section-title">{props.data.title}</p>
            <ul className="navbar-section-item">
            {props.data.items.map((res, index) => (
                <li className={res.isActive} >
                    <a href={res.link} > {res.title} </a>
                </li>
            ))}
            </ul>
        </Fragment>
    )

}

export default NavBarSection;