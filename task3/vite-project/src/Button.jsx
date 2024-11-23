import './App.css'
import { Component } from 'react'

class Button extends Component {
  state = {
    text: "Click me!",
    isClicked: false
  }

  handleClick = () => {
    this.setState({text: "Clicked", isClicked: true})
  }

  render(){
    const { text } = this.state;
    return (
      <>
      <div className='button-container'>
        <button type='button' className='button' onClick={this.handleClick} >{ text }</button>
      </div>
      </>
    )
  }
}

export default Button
