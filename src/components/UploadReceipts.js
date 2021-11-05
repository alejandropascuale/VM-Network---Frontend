import React from 'react'

const UploadReceipts = () => {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <main className='main-container'>
                <form className='login-form' id='upload-receipts' action='http://localhost:3001/api/receipts/upload' method='POST'>
                    <label htmlFor='period'>Período</label>
                    <input type='text' name='period' />
                    <label htmlFor='description'>Descripción</label>
                    <input type='text' name='description' />
                    <label htmlFor='receipts'>Subir Recibo</label>
                    <input type='file' name='receipts'/>
                </form>
            </main>
        </>
    )
}

export default UploadReceipts
