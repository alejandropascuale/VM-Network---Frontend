import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../App';

const Receipts = () => {
    const [ receipts, setReceipts] = useState([]);
    const { userLogin } = useContext(UserContext);

    useEffect( () => {
        fetch(`http://localhost:3001/api/users/receipts/${userLogin.idEmployee}`)
            .then(res => res.json())
            .then(data => {
                setReceipts(data)
            })
    }, [userLogin])


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
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receipts.map((receipt, i) => {
                            return (
                            <tr key={i}>
                                <td>{receipt.period}</td>
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
