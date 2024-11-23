import { Component } from 'react';

class Button extends Component {
  clickFunc = (e) => {
    const {message} = this.props;
    console.log(message)
  }
  render(){
    return (
      <>
      <div className="button-container">
        <button onClick={this.clickFunc} className='click-button'>Click Me!</button>
      </div>
      </>
    )
  }
}

export default Button
