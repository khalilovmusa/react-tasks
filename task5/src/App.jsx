import './App.css'
import { Component } from 'react'

class App extends Component{
  state = {
    data: ''
  }

  getData = () => {
    fetch("https://acb-api.algoritmika.org/api/transaction").then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({data: data[0]})
    })
  }

  componentDidMount(){
    this.getData();
  }

  render(){
    const {data} = this.state;
    console.log(data)
    return (
      <>
      <div>
         <p>From: {data.from}</p>
         <p>To: {data.to}</p>
         <p>Amount: {data.amount}</p>
      </div>
      </>
    )
  }
}

export default App
