import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../Ducks/reducer'

class PostBoard extends Component {
    constructor(){
        super()
        this.state = {
           
            posts:[]

        }
    }


    componentDidMount(){
        axios.get('/api/posts').then(res => {
            this.setState({posts: res.data})
        })
        
    }




    render(){
        const {title, img, content} = this.state
        return(
            <div>
                <h1>{title}</h1>
                {/* <h1>{img}</h1>
                <h1>{content}</h1> */}
            </div>
        )
    }

    
}
export default PostBoard