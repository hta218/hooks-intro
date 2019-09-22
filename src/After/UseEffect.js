import React, { useState, useEffect } from "react"

function Resizer() {
  const [height, setHeight] = useState(window.innerHeight)
  const [time, setTime] = useState(new Date())

  const handleResize = () => setHeight(window.innerHeight)
  const tick = () => setTime(new Date())

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    const timeIntervalId = setInterval(tick, 1000)
    console.log("Applying side effect")

    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(timeIntervalId)
    } // componentWillUnmount
  }, []) // componentDidMount, componentDidUpdate

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

export default Resizer
