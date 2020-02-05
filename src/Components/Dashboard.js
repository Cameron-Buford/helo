import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../Ducks/reducer'
import PostBoard from './PostBoard'


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: []

        }
    }

    componentDidMount(){
        axios.get('/api/posts').then(res => {
            this.setState({posts: res.data})
        })
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
        console.log(this.state.posts)
        const {title, img, content} = this.state
        
        return(
            <div className='dashmain'>Dashboard
                <div className='searchbar'>
                    <input
                        className= 'seachinput'
                        placeholder='Search by Title'>

                        </input>
                    <button>Reset</button>
                </div>
                
                <div 
                    className='postbox'
                    >{this.state.posts.map(post => (
                        <div>

                            <PostBoard/>
                        
                            {/* <div>{post.title}</div>
                            <div>{post.content}</div>
                            <img>{img}</img>
                             */}
                            
                        </div>
                           
                        
                    ))}
                        
                    </div>
            </div>
        )
    }

    


}


function mapStateToProps(state) {
    return {user: state.reducer.user}
    
}

export default connect(mapStateToProps, {getUser})(Dashboard)