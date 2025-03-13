import React, { useState } from 'react';
import './RegistrationForm.css';
import RegistrationStep from './RegistrationStep';
import ConfirmationStep from './ConfirmationStep';
import { registerUser, confirmUser } from './api';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        phone_number: '',
        username: ''
    });

    const [confirmationData, setConfirmationData] = useState({
        confirmation_code: ''
    });

    const [message, setMessage] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [phone_number, setPhoneNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage(null);
        setIsError(false);

        if (isRegistered) {
            try {
                const result = await confirmUser(phone_number, confirmationData.confirmation_code);
                setMessage('Confirmation successful');
            } catch (error) {
                setMessage(error.message);
                setIsError(true);
            }
        } else {
            try {
                const result = await registerUser(formData);
                setPhoneNumber(formData.phone_number);
                setMessage('Registration successful. Please enter the confirmation code.');
                setIsRegistered(true);
            } catch (error) {
                setMessage(error.message);
                setIsError(true);
            }
        }
    };

    return (
        <form className='registration-form' onSubmit={handleSubmit}>
            {!isRegistered ? (
                <RegistrationStep formData={formData} setFormData={setFormData} />
            ) : (
                <ConfirmationStep confirmationData={confirmationData} setConfirmationData={setConfirmationData} />
            )}
            {message && (
                <div className={isError ? 'error-message' : 'success-message'}>
                    {message}
                </div>
            )}
            <button type='submit' className='form-button'>
                {isRegistered ? 'Confirm' : 'Register'}
            </button>
        </form>
    );
}