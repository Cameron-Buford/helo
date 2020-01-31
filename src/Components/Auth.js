import React, {Component} from 'react'
import axios from 'axios'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            loginToggle: true

        }
    }

    toggleLogin= () => {
        this.setState({
            loginToggle: !this.state.loginToggle
        })
    }


    register = (username, password) => {
        axios.post('/auth/register', {username, password})
        .then(res => {
            console.log(res)
            this.props.history.push('/dashboard')
        })

    }

    login = (username, password) => {
        axios.post('/auth/login', {username, password})
        .then( res => {
            console.log(res)
            this.props.history.push('/dashboard')
        })

    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })

    }




    render(){
        const {username, password, loginToggle} = this.state
        return(
            <div>auth
                <div>



                        {/* {loginToggle ? ( */}
                            {/* <button onClick= {this.toggleLogin}>To register</button>
                        {/* ): ( */}
                            {/* <button onClick= {this.toggleLogin}>To login</button> */} 
                        {/* )} */}





                    <div>
                        <p>{'username:'}</p>
                        <input
                            name= 'username'
                            value={this.state.username}
                            onChange= {e => this.handleChange(e)}
                            />
                    </div>
                    <div className='login-input'>
                        <p>{'Password:'}</p>
                        <input
                            name='password'
                            value={this.state.password}
                            onChange={e => this.handleChange(e)}
                        />



                        {/* {loginToggle ? ( */}
                            <button onClick= {() => this.login(username, password)}>login</button>
                        {/* ): ( */}
                            <button onClick= {() => this.register(username, password)}>register</button>
                    
                        {/* )} */}



                    </div>


                </div>

        </div>
        )
    }


}

export default Auth