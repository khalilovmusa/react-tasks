import { Component } from 'react'
import './Wine.css'

export default class Wine extends Component{
  render() {
    const {title, description, rating} = this.props;

    return (
      <>
        <div className='wine-component'>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <p>{rating}</p>
        </div>
      </>
    )
  }
}