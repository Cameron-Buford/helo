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

        // if (this.props.location.pathname === '/') {
        //     return <></>;
        // } else {
           
            
            
            return(
                <div>
                    <div>navbar</div>
                    <button>Home</button>
                    <button>New Post</button>
                    <button>Logout</button>
                </div>
                )
            // }

    }


}

export default withRouter(Nav);