import React, { Component } from 'react'

/* Assets */
import logo from '../assets/static/icons/prevalentwareLogo.png'
import palomita from '../assets/static/icons/palomita.png'
import cruz from '../assets/static/icons/crux.png'
import clip from '../assets/static/icons/clip.png'
import '../assets/styles/containers/AprobacionEmpresas.scss'

export default class AprobacionEmpresas extends Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div class="card text-left col-md-12 col-lg-10 mx-auto ">
                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                        <div class="card-body">
                            <div className="container-fluid contenedor__head">
                                <div className="row">
                                    <img src={logo} alt="" className="logo offset-lg-4 offset-2 mt-5 mt-lg-0" />

                                    <div className="col-3 offset-1 mt-3 d-none d-sm-block contenedor__head--buttons">
                                        <button className="btn btn-outline-primary mb-4"> <img src={palomita} alt="" /> Aprobar Empresa</button>
                                        <button className="btn btn-outline-primary"> <img src={cruz} alt="" /> Rechazar Empresa</button>
                                    </div>
                                </div>
                                <form className="mt-4 contenedor">
                                    <div className="row offset-lg-1" >
                                        <div className="col-lg-5  contenedor__forms">
                                            <label className="contenedor__forms--label">Nombre de la empresa</label>
                                            <input type="text" className="form-control contenedor__forms--item" placeholder="First name" />
                                        </div>
                                        <div className="col-lg-5  contenedor__forms">
                                            <label className="contenedor__forms--label">Nombre de la empresa</label>
                                            <input type="text" className="form-control  contenedor__forms--item" placeholder="Last name" />
                                        </div>
                                        <div className="col-lg-5  contenedor__forms">
                                            <label className="contenedor__forms--label">Nombre de la empresa</label>
                                            <input type="text" className="form-control  contenedor__forms--item" placeholder="Last name" />
                                        </div>
                                        <div className="col-lg-5  contenedor__forms">
                                            <label className="contenedor__forms--label">Nombre de la empresa</label>
                                            <input type="text" className="form-control contenedor__forms--item" placeholder="Last name" />
                                        </div>
                                        <div className="col-lg-5  contenedor__forms">
                                            <label className="contenedor__forms--label">Nombre de la empresa</label>
                                            <input type="text" className="form-control contenedor__forms--item" placeholder="Last name" />
                                        </div>
                                        <div className="col-lg-5 d-none d-sm-block contenedor__forms">
                                            <button className=" btn btn-outline-primary col-lg-9 mt-3  contenedor__forms--item"> <img src={clip} alt="" /> Ver archivos adjuntos</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="row"></div>
                        </div>
                    </div>
                    <div className="col-8 mx-auto d-block mt-2 d-sm-none ">
                        <button className="btn btn-outline-primary mt-4 p-2"> <img src={palomita} alt="" /> Aprobar Empresa</button>
                        <button className="btn btn-outline-primary mt-4 p-2"> <img src={cruz} alt="" /> Rechazar Empresa</button>
                    </div>
                </div>
            </>
        )
    }
}
