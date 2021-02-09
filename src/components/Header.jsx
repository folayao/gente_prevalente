import React, { Component } from 'react'


/* Styles */
import lupa from '../assets/static/icons/lupa.png'
import engranajes from '../assets/static/icons/engranajes.png'
import cv from '../assets/static/icons/cv.png'
import empleo from '../assets/static/icons/empleo.png'
import elipse from '../assets/static/icons/elipse.png'
import menu from '../assets/static/icons/menu.png'
import dropdown from '../assets/static/icons/togglerDropdown.png'
import logo from '../assets/static/logo1.png'
import '../assets/styles/components/Header.scss'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-md navbar-dark navbar__container" style={{ paddingTop: 0, paddingBottom: 0 }}>
                <Link className="navbar__container--title" to="/" style={{ paddingTop: 0, paddingBottom: 0 }}><img src={logo} className="" alt="Logo Gente Prevalente" /> Gente Prevalente</Link>
                <button className="navbar-toggler d-lg-none" style={{ border: 0 }} type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"><img src={menu} alt="" /></button>
                <div className="collapse navbar-collapse ml-md-5" id="collapsibleNavId">
                    <img src={lupa} alt="" className="pr-1" />
                    <form className="form-inline  ml-0 mt-3 mt-sm-0 mt-md-0 my-lg-0">
                        <input className="form-control mr-sm-2" style={{ paddingLeft: 0 }}
                            type="text" placeholder="Search..." id="form-control-input" />
                    </form>
                    <ul className="navbar-nav flex-md-row w-100 mt-2 ">
                        <li className="nav-item active ml-md-auto cont_not ">
                        <img style={{ paddingBottom: 5 }} src={engranajes} alt="" className="nav-link cont-img"  /> 
                            <Link className="nav-link cont-link" to="/"> Administración</Link>
                            <p className="notificacion d-none d-sm-block">2</p>
                        </li>

                        <li className="nav-item dropdown ml-md-auto  active">
                            <a className="nav-link  " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img style={{ paddingBottom: 5 }} src={empleo} alt="" /> Empleo <img src={dropdown} alt="" />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Lista de Empleos</a>
                                <a className="dropdown-item" href="#">Entrevistas</a>
                            </div>
                        </li>

                        <li className="nav-item ml-md-auto  active ">
                            <a className="nav-link " href="#"> <img src={cv} alt="" style={{ paddingBottom: 5 }} /> Mi Cv</a>
                        </li>

                        <li className="nav-item dropdown ml-md-auto  active ">
                            <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={elipse} alt="" style={{ paddingBottom: 3 }} /> Felipe <img src={dropdown} alt="" /></a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Perfil</a>
                                <a className="dropdown-item" href="#">Configuración</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


        )
    }
}
