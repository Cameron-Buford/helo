import React, {Component} from 'react'
import axios from 'axios'


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

export default Dashboard