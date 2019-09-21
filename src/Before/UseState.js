import React, { Component } from "react"

class ExCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }

  inc() {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  dec() {
    const { count } = this.state
    this.setState({ count: count - 1 })
  }

  render() {
    const { count } = this.state

    return (
      <div className="p-10 text-center">
        <h1 className="text-4xl my-4">How many exes do you have?</h1>
        <div>
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none"
            onClick={this.dec}>
            -
          </button>
          <span className="mx-4">{count}</span>
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none"
            onClick={this.inc}
            >
            +
          </button>
        </div>
      </div>
    )
  }
}

export default ExCounter
