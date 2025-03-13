export const registerUser = async (formData) => {
    const response = await fetch(`${API_HOST}/api/v1/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Registration failed');
    }

    return await response.json();
};

export const confirmUser = async (phone_number, confirmation_code) => {
    const response = await fetch(`${API_HOST}/api/v1/confirm_user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone_number, confirmation_code })
    });

    if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Code verification failed');
    }

    return await response.json();
};