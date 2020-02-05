import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            img: '',
            content: ''

        }
    }

    newPost = () => {
        const {title, img, content} = this.state;
        console.log('onclick')
        axios.post('/api/new', {title, img, content}).then(() => {
            console.log('axios')
            this.props.history.push('/dashboard')
        })
    }

    handleChange = ({name, value}) => this.setState({[name]: value})
    

    render(){
        const {title, img, content} = this.state;
        return(
            <div>New Post
                <p>{'Title:'}</p>
                <input
                    name='title'
                    value={title}
                    placeholder='enter title'
                    onChange= {(e) => this.handleChange(e.target)}></input>
                <img src= {img}/>
                <p>{'Image URL:'}</p>
                
                <input
                    className='newimg'
                    name='img'
                    value={img}
                    placeholder='enter img url'
                    onChange= {(e) => this.handleChange(e.target)}
                    />
                
                <p>{'Content:'}</p>
                <textarea className='newcontent'
                name='content'
                value={content}
                placeholder='enter content'
                onChange={(e) => this.handleChange(e.target)}/>
                <button className= 'submitPostButton'
                    onClick = {() => {
                        this.newPost({title, img, content})  
                        
                    }}
                >Post</button>
            </div>
        )
    }


}

export default Post