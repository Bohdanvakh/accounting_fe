import React, { Component } from 'react';
import '../../styles/App.css';
import RegistrationForm from '../forms/RegistrationForm';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone_number: '',
            username: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log('handle changed', event);
    }

    handleSubmit(event) {
        console.log('form submitted');
        event.preventDefault();
    }

    render() {
        return (
        <div className='registration-background'>
            <div className='registration-container'>
                <RegistrationForm />
            </div>
        </div>
        );
    }
}