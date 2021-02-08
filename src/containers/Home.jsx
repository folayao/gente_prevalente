import React, { Component } from 'react'
import Card from '../components/Card'

/* Imgs */
import factory from '../assets/static/icons/factory.png'
import empleado from '../assets/static/icons/empleado.png'
import gestion from '../assets/static/icons/gestion.png'
import indicadores from '../assets/static/icons/indicadores.png'
/* Styles */
import '../assets/styles/containers/Home.scss'
class Home extends Component {
    render() {
        return (
            <>
                <div className="container">
                        
                    <div className="row">
                            <Card
                                direccion="/aprobacion"
                                icon={factory}
                                titulo="Solicitudes de creación de empresas"
                                info="2 solicitudes sin tratar"
                            />
                            <Card
                                direccion="/"
                                icon={indicadores}
                                titulo="Indicadores"
                                info="Visitado por última vez: 31/01/2020"
                            />
                        
                    </div>
                    <div className="row">
                            <Card
                                direccion="/"
                                icon={empleado}
                                titulo="Inscripción de empleados en empresas"
                                info="3 usuarios sin empresa registrada"
                            />
                            <Card
                                direccion="/"
                                icon={gestion}
                                titulo="Gestión de usuarios"
                                info="532 usuarios activos en la plataforma"
                            />
                    </div>
                </div>
            </>
        )
    }
}
export default Home;