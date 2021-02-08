import React from 'react'

import '../../assets/styles/components/Aprobacion/input.scss'
 const Input = ({titulo, defaultvalue}) => {
    return (
        <div className="col-lg-6  contenedor__forms">
            <label className="contenedor__forms--label">{titulo}</label>
            <input defaultValue={defaultvalue} type="text" className="form-control contenedor__forms--item" placeholder="Nombre de la empresa" />
        </div>
    )
}

export default Input