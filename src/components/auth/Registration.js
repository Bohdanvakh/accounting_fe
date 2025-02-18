import React, { Component } from 'react';
import '../../styles/App.css';

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
                <form className='registration-form' onSubmit={this.handleSubmit}>
                    <input type='username'
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                        className='form-input'
                    />
                    <input type='phone_number'
                        name='phone_number'
                        placeholder='Phone Number'
                        value={this.state.phone_number}
                        onChange={this.handleChange}
                        required
                        className='form-input'
                    />
                    <button type='submit' className='form-button'>Register</button>
                </form>
            </div>
        </div>
        );
    }
}