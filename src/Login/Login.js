import './Login.css';
import { Component } from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    

    render() {
        return (
            <div className="login-container">
                <form className="login-form">
                    <div className="username-input">
                        <label className='login-label' htmlFor="username">Username</label>
                        <input
                            className='login-input'
                            type="text"
                            placeholder='enter username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className='password-input-div'>
                        <label className='login-label' htmlFor='user-password'>Password:</label>
                        <input
                            className='login-input'
                            type='password'
                            placeholder='enter password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}


export default Login;