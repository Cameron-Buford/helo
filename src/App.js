import React, {Component} from 'react';
import './App.css';
import Auth from './Components/Auth'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import Post from './Components/Post'
import Nav from './Components/Nav'
import routes from './routes';


class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
  return (
    <div className="App">
      <Nav/>
      {routes}
      
    </div>
  )
}
}

export default App;
