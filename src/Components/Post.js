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
        axios.post('/api/new', {title, img, content}).then(() => {
            this.props.history.push('/dashboard')
        })
    }

    handleChange = ({name, value}) => {
        this.setState({[name]: value})
    }

    render(){
        const {title, img, content} = this.state;
        return(
            <div>New Post
                <p>{'Title:'}</p>
                <input></input>
                <img src='https://vignette.wikia.nocookie.net/vikingstv/images/5/56/Floki_hd.jpg/revision/latest/top-crop/width/360/height/360?cb=20180127050230'></img>
                <p>{'Image URL:'}</p>
                <input
                    name= 'pic'
                    value= {img}
                    placeholder= 'image url here'
                    onChange= {(e) => this.handleChange(e.target)}
                ></input>
                <p>{'Content:'}</p>
                <input></input>
                <button className= 'submitPostButton'
                    onClick = {() => {
                        this.newPost()
                    }}
                >Post</button>
            </div>
        )
    }


}

export default Post