import React, { Component } from 'react'


/* Styles */
import logo from '../assets/static/logo1.png'
import '../assets/styles/components/Header.scss'
export default class Header extends Component {
    render() {

        return (
            <div className="navbar navbar-expand-md navbar-dark navbar__container" style={{ paddingTop: 0, paddingBottom: 0 }}>
                <a className="navbar__container--title" href="#" style={{ paddingTop: 0, paddingBottom: 0 }}><img src={logo} className="" alt="Logo Gente Prevalente" /> Gente Prevalente</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <form className="form-inline ml-sm-5 ml-md-5 ml-0 mt-3 mt-sm-0 mt-md-0 my-lg-0">
                        <input className="form-control mr-sm-2" style={{paddingLeft:0}}
                            type="text" placeholder="Search..." id="form-control-input" />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Administración <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Empleo
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mi Cv</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Felipe
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


        )
    }
}
