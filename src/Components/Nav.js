import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class Nav extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){

        if (this.props.location.pathname === '/') {
            return <></>;
        } else {
           
            
            
            return(
                <div className='navbar'>
                    <div>profile pic
                        <img src='https://vignette.wikia.nocookie.net/vikingstv/images/8/86/Ragnar_Mid-Season_Promo.jpeg/revision/latest?cb=20161219020239'></img>
                        <div>name</div>
                    </div>
                    <button className='homebutton' onClick={() => this.props.history.push('/dashboard')}>Home</button>
                    <button className='postbutton' onClick={() => this.props.history.push('/post/:postid')}>to posts </button>
                    <button className='logoutbutton' onClick= {() => axios.post('/auth/logout').then(() => this.props.history.push('/'))}>Logout</button>
                </div>
                )
            }

    }


}

function mapStateToProps(state) {
    return {user: state.reducer.user};
    
}

export default connect(mapStateToProps)(withRouter(Nav));