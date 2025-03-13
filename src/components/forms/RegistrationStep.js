import React from 'react';

export default function RegistrationStep({ formData, setFormData }) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <input 
                type='text'
                name='username'
                placeholder='Username'
                value={formData.username}
                onChange={handleChange}
                required
                className='form-input'
            />
            <input 
                type='tel'
                name='phone_number'
                placeholder='Phone Number'
                value={formData.phone_number}
                onChange={handleChange}
                required
                className='form-input'
            />
        </>
    );
}