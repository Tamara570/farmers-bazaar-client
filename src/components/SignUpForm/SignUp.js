import React, {Component} from 'react';
import './SignUp.css'
import Validator from '../Validator/Validator'
import AuthContext from '../../context/AuthContext'
import AuthApiService from '../../services/auth-api-service'
import { withAppContext } from '../../context/AppContext';

class Signup extends Component {
    static contextType = AuthContext

    state = {
        email: '', emailValid: false,
        password: '', passwordValid: false,
        formValid: false,
        error: null,
        validationError: {},
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({error: null})
        const { email, password } = this.state
        const newUser = { email, password}
        const {setLoading} = this.props.appContext
        try {
            setLoading(true)
            const savedUser = await AuthApiService.createUser(newUser)
            this.context.login(savedUser.authToken)
            delete savedUser.authToken
            this.context.setCurrentUser(savedUser)
            setLoading(true)
        } catch(err) {
            this.setState({error: err.message}, setLoading(false))
        }
    }

    componentWillUnmount() {
        this.setState({error: null})
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
        [name]: value
        }, name === 'password' ? this.validatePassword : null)
    }

    validateForm = () => {
        const { emailValid, passwordValid } = this.state
        this.setState({
        formValid: emailValid && passwordValid
        })
    }


    validateEmail = () => {
        let emailValid = true
        const validationError = {...this.state.validationError}
        const {email} = this.state

        if (email.startsWith(' ') || email.endsWith(' ')) {
            emailValid = false
            validationError.email = 'cannot begin or end with spaces'
        } else if (!email.length) {
            emailValid = false
            validationError.email = 'is required'
        } else if (!/\S+@\S+/.test(email)) {
            emailValid = false
            validationError.email = 'invalid format'
        }

        this.setState({emailValid, validationError}, this.validateForm)
    }

    validatePassword = () => {
        let passwordValid = true
        const validationError = {...this.state.validationError}
        const {password} = this.state

        if (password.startsWith(' ') || password.endsWith(' ')) {
            passwordValid = false
            validationError.password = 'cannot begin or end with spaces'
        } else if (password.length < 6 || password.length > 72) {
            passwordValid = false
            validationError.password = 'must be between 6 and 72 characters'
        }

        this.setState({passwordValid, validationError}, this.validateForm)
    }

    render() {
        const {validationError, emailValid, passwordValid, formValid} = this.state

        return (
            <form className='js-registration-form' action='#' onSubmit={this.handleSubmit}>
                <div className='error-msg'>{this.state.error}</div>

                <div className="form-group">
                    <label for="email">Email</label>
                    < Validator isValid={emailValid} msg={validationError.email} />
                    <input
                        type="text"
                        value={this.state.email}
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                        onBlur={this.validateEmail}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label for="psw">Password</label>
                    < Validator isValid={passwordValid} msg={validationError.password} />
                    <input
                        type="password"
                        name="psw"
                        id="psw"
                        //value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label for="psw">Confirm Password</label>
                    < Validator isValid={passwordValid} msg={validationError.password} />
                    <input
                        type="password"
                        name="psw"
                        id="psw"
                        //value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="form-controls">
                    <button disabled={!formValid} type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default withAppContext(Signup);
