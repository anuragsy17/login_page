import React, { Component } from 'react';
import { loginDetails } from '../mock';
import { Link } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom'
import Loginpage from './Loginpage';
import Signup from './Signup';
import Home from './Home';
import ChangePassword from './changePassword';

class Header extends Component {
    state = {
        loggedin: false,
        changePass: false,
        loginData: []
    }
    updateState = (data) => {
        this.setState({...this.state, loginData: data})
    }
    updateLoggedIn = (data)=>{
        this.setState({...this.state, loggedin: data})
    }
    updateChangePass = (data)=>{
        this.setState({...this.state, changePass: data})
    }
    updatePass = (data)=>{
        this.setState({...this.state, loginData: data})
    }

    render() {
        const loginHead = loginDetails.map((data) => { return data.loginHead })
        return (
            <>
            {this.state.loggedin ? <Home/> : 
            <div className="container">
                <div className="main_div">
                    <div className="login">
                        <div className="login_popup">
                            <div className="login_head">
                                {
                                    loginHead[0].map((data) => {
                                        console.log('name', data.name);
                                        return (
                                            <Link key={data.name} className={data.class} to={data.path}>
                                                {data.name}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            
                                <Routes>
                                    <Route path="/" element={<Loginpage
                                    data={
                                        { updateLoggedIn: this.updateLoggedIn.bind(this) }
                                    }
                                    loginData = {this.state.loginData}
                                    />} />
                                    <Route path="signup" element={<Signup 
                                    data={
                                        { updateState: this.updateState.bind(this) }
                                    }
                                    />} />
                                    <Route path="/home" element={<Home 
                                    data={
                                        { updateChangePass: this.updateChangePass.bind(this) }
                                    }
                                    />} />
                                    <Route path='change_password' element={<ChangePassword
                                    loginData = {this.state.loginData}
                                    data={
                                        { updatePass: this.updatePass.bind(this) }
                                    }
                                    />}/>
                                    <Route path='/' element={<Loginpage/>}></Route>
                                </Routes>
                        </div>
                    </div>
                </div>
            </div>
                                }
            </>
        );
    }
}

export default Header;