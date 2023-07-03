import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
//type impt for above

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                     {/* <div className={`form-check mx-2 form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode === 'purple'?'Light':'Purple'} Mode</label>
                    </div> */}
                    <div className={`form-check form-switch text-${props.mode === 'dark'?'light':'dark'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable {props.mode === 'dark'?'Light':'Dark'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
// To check the values being send to the props
Navbar.propTypes = {
    title: propTypes.string,
    aboutText: propTypes.string
}
// if title:propTypes.string.isRequired is added then it is compulsary to give a value to it else it will throw error 
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About Text Here"
}