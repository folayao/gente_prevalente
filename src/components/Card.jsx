import React, { Component } from 'react'

import '../assets/styles/components/Card.scss'
import reloj from '../assets/static/icons/reloj.png'

class Card extends Component {


    render() {
        const { icon, titulo, info } = this.props
        return (

            <>
                <div className=" col-md-6 col-xs-12 contenedor__card">
                    <img src={icon} alt="" className="icono" />
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{titulo}</h4>
                        </div>
                        <div className="card-footer text-muted mb-0 mb-sm-3 mb-md-0">
                            <img src={reloj} alt="" className="card__footer--img" style={{paddingLeft: 17, paddingTop:20}}/>
                            <div className="card-text ">
                                {info}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Card;
