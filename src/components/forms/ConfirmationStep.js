import React from 'react';

export default function ConfirmationStep({ confirmationData, setConfirmationData }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setConfirmationData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <input 
                type='text'
                name='confirmation_code'
                placeholder='Confirmation Code'
                value={confirmationData.confirmation_code}
                onChange={handleChange}
                required
                className='form-input'
            />
        </>
    );
}