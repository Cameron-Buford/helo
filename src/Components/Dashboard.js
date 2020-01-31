import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../Ducks/reducer'


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('/auth/user')
        .then(res => {
            console.log(res)
            if(res.data === 'no user on session'){
                this.props.history.push('/')
            } else{
                this.props.getUser(res.data)
            }
        })
    }

    render(){
        return(
            <div>Dashboard
                <h1>yo, you made it here!</h1>
            </div>
        )
    }

    


}


function mapStateToProps(state) {
    return {user: state.reducer.user}
    
}

export default connect(mapStateToProps, {getUser})(Dashboard)