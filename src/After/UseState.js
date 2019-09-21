import React, { useState } from "react"

function ExCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10 text-center text-gray-800">
      <h1 className="text-4xl my-4">How many exes do you have?</h1>
      <div>
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none"
          onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className="mx-4">{count}</span>
        <button 
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none"
          onClick={() => setCount(count + 1)}
          >
          +
        </button>
      </div>
    </div>
  )
}

export default ExCounter
