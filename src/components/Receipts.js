import React from 'react'
import { Link } from 'react-router-dom'

const Receipts = () => {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Periodo</th>
                            <th>Action</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Octubre 2021</td>
                            <td><Link to='/files/Copia de VM - Recibos de Sueldos 2021-10.pdf' target="_blank" download>Descargar recibo</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Receipts
