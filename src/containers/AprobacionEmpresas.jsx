import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Aprobacion/Input'
import Descargable from '../components/Aprobacion/Descargable'

/* Assets */
import logo from '../assets/static/icons/prevalentwareLogo.png'
import palomita from '../assets/static/icons/palomita.png'
import cruz from '../assets/static/icons/crux.png'
import clip from '../assets/static/icons/clip.png'
import izq from '../assets/static/icons/izq.png'
import derecha from '../assets/static/icons/derecha.png'
import pdfi from '../assets/static/icons/pdf.png'
import '../assets/styles/containers/AprobacionEmpresas.scss'

export default class AprobacionEmpresas extends Component {
    render() {
        return (
            <>
                <div className="container-fluid contenedor__breadcrumb mt-2">
                    <div className="row">
                        <ol class="breadcrumb  ">
                            <li class="breadcrumb-item contenedor__breadcrumb--item"><Link to="/">Administración</Link></li>
                            <li class="breadcrumb-item active contenedor__breadcrumb--item" aria-current="page">Aprobación de Empresas</li>
                        </ol>
                    </div>
                    <div className=" contenedor__labelfooter d-block d-sm-none mb-4">
                        <div className="row mx-auto label__footer">
                            <img src={izq} alt="" />
                            <label className="label__footer-item mx-3 pt-2"> Empresa 1 de 2 pendiente por aprobación </label>
                            <img src={derecha} alt="" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div class="card text-left col-md-12 col-lg-10 mx-auto ">
                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                        <div class="card-body">
                            <div className="container-fluid contenedor__head">
                                <div className="row">
                                    <img src={logo} alt="" className="logo offset-lg-4 offset-2 mt-lg-0 mt-4" />

                                    <div className="col-3 offset-1 mt-3 d-none d-sm-block contenedor__head--buttons">
                                        <button className="btn btn-outline-secondary mb-4"> <img src={palomita} alt="" /> Aprobar Empresa</button>
                                        <button className="btn btn-outline-secondary"> <img src={cruz} alt="" /> Rechazar Empresa</button>
                                    </div>
                                </div>
                                <form className="mt-4 contenedor ">
                                    <div className="row " >
                                        <Input
                                            titulo="Nombre de la empresa"
                                            defaultvalue="PREVALENTWARE"
                                        />
                                        <Input
                                            titulo="Razón Social"
                                            defaultvalue="PREVALENTWARE S.A.S"
                                        />
                                        <Input
                                            titulo="Tipo de identificación"
                                            defaultvalue="NIT"
                                        />
                                        <Input
                                            titulo="Identificación"
                                            defaultvalue="901375150-4"
                                        />
                                        <Input
                                            titulo="# de empleados"
                                            defaultvalue="1 - 10"
                                        />
                                        <div className="col-lg-6 d-none d-sm-block contenedor__forms">
                                            <button type="button" class="btn btn-outline-secondary col-lg-9 mt-3  contenedor__forms--item btn-lg" data-toggle="modal" data-target="#modelId">
                                                <img src={clip} alt="" /> Ver archivos adjuntos</button>
                                            <div className="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content contenedor__modal">
                                                        <div className="modal-header contenedor__modal-header">
                                                            <h5 className="contenedor__modal-header--title">Documentos Cargados</h5>
                                                            <button type="button" className="close  contenedor__modal-header--close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>

                                                        <div className="mx-auto modal-body contenedor__modal-body">
                                                            <ul class="contenedor__ul">
                                                                <Descargable titulo="RUT PrevlalentWare" />
                                                                <Descargable titulo="Logo PrevlalentWare" />
                                                                <Descargable titulo="Acta de constitución PrevlalentWare" />
                                                                <Descargable titulo="Cámara de Comercio Prevalentware" />
                                                                <Descargable titulo="Otro Documento  Prevalentware" />
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>
                            <div className="row d-block d-sm-none">
                                <div className=" contenedor__modal">
                                    <div className="contenedor__modal-header">
                                        <h5 className="contenedor__modal-header--title">Documentos Cargados</h5>
                                    </div>
                                    <div className="mx-auto contenedor__modal-body">
                                        <ul class="contenedor__ul">
                                            <Descargable titulo="RUT PrevlalentWare" />
                                            <Descargable titulo="Logo PrevlalentWare" />
                                            <Descargable titulo="Acta de constitución PrevlalentWare" />
                                            <Descargable titulo="Cámara de Comercio Prevalentware" />
                                            <Descargable titulo="Otro Documento  Prevalentware" />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-5 mt-5 contenedor__labelfooter mx-auto d-none d-sm-block">
                        <div className="row mx-auto pl-5">
                            <img src={izq} alt="" />
                            <label className="label__footer mx-3 "> Empresa 1 de 2 pendiente por aprobación </label>
                            <img src={derecha} alt="" />
                        </div>
                    </div>

                    <div className="col-8 mx-auto  mt-2 d-block d-sm-none contenedor__botonesResponsive ">
                        <button className="btn btn-outline-secondary mt-4 p-2"> <img src={palomita} alt="" /> Aprobar Empresa</button>
                        <button className="btn btn-outline-secondary mt-4 p-2"> <img src={cruz} alt="" /> Rechazar Empresa</button>
                    </div>
                </div>
            </>
        )
    }
}
