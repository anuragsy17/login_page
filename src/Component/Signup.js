import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginDetails } from '../mock'

class Signup extends Component {
    state = {
        Email: '',
        Password: '',
        ConfirmPassword: '',
        error: false,
        errorText: '',
        to: ''
    }
    handleChanges = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    onSignup = () => {
        if(this.state.Password !== this.state.ConfirmPassword){
            this.setState({...this.state, error: true, errorText: 'password dosent matched'})
        }else{
            this.setState({...this.state, error: false, errorText: '', to: '/' })
        this.props.data.updateState(this.state)
        }
    }
    render() {
        console.log('email', this.state.Email);
        console.log('pass', this.state.Password);
        const plc_text = loginDetails.map((data) => { return data.loginHead[1] })
        return (

            <form  className="form_group">
                {
                    plc_text[0].placeholder.map((data) => {
                        return (
                            <input type="text" name={data.name} className={data.class} placeholder={data.placeholder} onChange={this.handleChanges} />
                        )
                    })
                }
                <button onClick={this.onSignup} className="button">
                    <Link className='signup_link'  to={this.state.to}>
                        Sign up
                    </Link>
                </button>
                {this.state.error ? <p>{this.state.errorText}</p>: null}
            </form>


        );
    }
}

export default Signup;