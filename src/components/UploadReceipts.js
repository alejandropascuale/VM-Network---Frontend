import React from 'react'
import {Link} from 'react-router-dom'

const UploadReceipts = () => {
    const filesUpload = (e) => {
        e.preventDefault();
        let inputFiles = document.querySelector('#receipts');

        console.log('upload files...');
        console.log(inputFiles);
    }
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <main className='receipts-container'>
                <form className='login-form' id='upload-receipts' action='http://localhost:3001/api/users/receipts/upload' method='POST' encType='multipart/form-data'>
                    
                    <label htmlFor='period'>Período</label>
                    <input type='text' name='period' />

                    <label htmlFor='description'>Descripción</label>
                    <input type='text' name='description' />

                    <label htmlFor='receipts'>Subir Recibos</label>
                    <input type='file' name='receipts' id='receipts' multiple></input>

                    <button onClick={filesUpload} type='submit' className='login-button'>Cargar</button>
                </form>
                <Link to='/' className='normal-button'>Volver</Link>
            </main>
        </>
    )
}

export default UploadReceipts
