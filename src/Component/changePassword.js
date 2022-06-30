import React, { Component } from 'react';
import {loginDetails} from '../mock'
import {Link} from 'react-router-dom'

class ChangePassword extends Component {
    state = { 
        Email: '',
        Password: '',
        ConfirmPassword: '',
        error: false,
        errorText: '',
        to: ''
     } 
    handleChanges =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangePassword = (e)=>{
        e.preventDefault()
        if(this.props.loginData.Email !== this.state.Email){
            this.setState({...this.state, error: true, errorText: 'account with this email dosent exist'})
        }else if(this.state.Password !== this.state.ConfirmPassword){
            this.setState({...this.state, error: true, errorText: 'Password does not match'})
        }else {
            this.setState({...this.state, error: false, errorText: '', to: '/'})
            this.props.data.updatePass(this.state)
        }
    }
    render() { 
        const plc_text = loginDetails.map((data) => { return data.loginHead[1] })
        return (
            <>
            <form action="#" className="form_group">
                <p className='para_head'>forget Password ? please enter your existing email</p>
                {
                    plc_text[0].ChangePassPlc.map((data) => {
                        return (
                            <input type="text" name={data.name} className={data.class} placeholder={data.placeholder} onChange={this.handleChanges} />
                        )
                    })
                }
                <button onClick={this.onChangePassword} className="changePass_button">
                    <Link className='changePass_link'   to={this.state.to}>
                        Change Password
                    </Link>
                </button>
                {this.state.error ? <p className='err_text'>{this.state.errorText}</p>: null}
            </form>
            </>
        );
    }
}
 
export default ChangePassword
