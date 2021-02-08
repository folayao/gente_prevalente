import React from 'react'

import '../../assets/styles/components/Aprobacion/descargables.scss'
import pdfi from '../../assets/static/icons/pdf.png'

const Descargable = ({ titulo }) => {
    return (
        <li class="contenedor__ul-item"> <p className="contenedor__ul-item--p">{titulo}</p>  <a href="/files/file.pdf" download="descarga" className="contenedor__ul-item--a"><img src={pdfi} alt="" className="contenedor__ul-item--img" /></a></li>
    )
}

export default Descargable
