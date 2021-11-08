import React from 'react'
import {Link} from 'react-router-dom'

const UploadReceipts = () => {
    
    const handlerUpload = (e) => {
        const period = document.querySelector('#period').value;
        const description = document.querySelector('#description').value;

        const employees = ['002', '004', '006', '007', '011', '012', '013', '016', '018', '024', '025', '029', '032', '033', '035', '036', '037', '040', '051', '052', '054', '056', '058', '059', '060', '061', '062', '064', '090', '093', '094', '096', '097', '099', '100', '101', '102', '103', '104', '106', '107', '108', '109'];
        const receiptsToUpload = [];
        for (let i = 0; i < e.target.files.length; i++) {
            const elementName = `/files/Recibo ${period} - Legajo ${employees[i]}`
            
            const element = {
                period: period,
                description: description,
                file: elementName,
                id_user: Number(employees[i])
            }
            receiptsToUpload.push(element);
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: receiptsToUpload
        }   
        fetch('http://localhost:3001/api/users/receipts/upload', options);
    }
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <main className='receipts-container'>
                <form className='login-form' id='upload-receipts' action='http://localhost:3001/api/users/receipts/upload' encType='multipart/form-data' method='POST'>
                    
                    <label htmlFor='period'>Período</label>
                    <input type='text' name='period' id='period'/>

                    <label htmlFor='description'>Descripción</label>
                    <input type='text' name='description' id='description' />

                    <label htmlFor='receipts'>Subir Recibos</label>
                    <input onChange={handlerUpload} type='file' name='receipts' id='receipts' multiple></input>

                    <button type='submit' id='upload-button' className='login-button'>Cargar</button>
                </form>
                <Link to='/' className='normal-button'>Volver</Link>
            </main>
        </>
    )
}

export default UploadReceipts
