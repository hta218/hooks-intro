import React from "react"

class Resizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerHeight,
      time: new Date()
    }
    this.handleResize = this.handleResize.bind(this)
    this.tick = this.tick.bind(this)
  }

  handleResize() {
    this.setState({ height: window.innerHeight })
  }

  tick() {
    this.setState({ time: new Date() })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
    this.timeIntervalId = setInterval(this.tick, 1000)
  }

  render() {
    const { height, time } = this.state

    return (
      <div className="p-10 text-center text-3xl text-gray-800">
        The window height is{" "}
        <span className="bg-gray-300 py-2 px-4 ms-3 rounded">
          {height}
        </span>{" "}
        px
        <div className="text-sm absolute left-0 bottom-0 p-2">{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</div>
      </div>
    )
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
    clearInterval(this.timeIntervalId)
  }
}

export default Resizer
