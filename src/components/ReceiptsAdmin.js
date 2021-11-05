import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Receipts = () => {
    const [ receipts, setReceipts] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:3001/api/users/receipts`)
            .then(res => res.json())
            .then(data => {
                setReceipts(data)
            })
            console.log(receipts);
    }, [])


    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='receipts-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Período</th>
                            <th>Detalle</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receipts.map((receipt, i) => {
                            return (
                            <tr key={i}>
                                <td>{receipt.period}</td>
                                <td>{receipt.description}</td>
                                <td><Link to={receipt.file} target="_blank" download>Descargar recibo</Link></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to='/' className='normal-button'>Volver</Link>
            </div>
        </>
    )
}

export default Receipts
