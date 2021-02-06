import React, { Component } from 'react'

import '../assets/styles/components/Card.scss'
import reloj from '../assets/static/icons/reloj.png'

class Card extends Component {


    render() {
        const { icon, titulo, info } = this.props
        return (

            <>

                <div className=" col-6 contenedor__card">
                    <img src={icon} alt="" className="icono" />
                    <div className="card">
                        <div className="card-body">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h4 className="card-title">{titulo}</h4>

                        </div>
                        <div className="card-footer text-muted ">
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
