import React from "react"
import ThemeContext from "../ThemeContext"

class Card extends React.Component {
  render() {
    return <ThemeContext.Consumer>
      {
        ({ theme }) => {
          let bgColor = "bg-gray-100"
          let borderColor = "border-gray-400"
          let notiColor = "text-gray-600"
          let lockColor = "text-gray-500"
          let titleColor = "text-gray-900"
          let descriptionColor = "text-gray-700"
      
          if (theme === "dark") {
            bgColor = "bg-gray-800"
            borderColor = "border-gray-200"
            notiColor = "text-gray-400"
            lockColor = "text-gray-500"
            titleColor = "text-gray-200"
            descriptionColor = "text-gray-400"
          }
      
          return (
            <div className={`p-10 ${bgColor} h-screen`}>
              <div className={`w-full flex ${borderColor} border rounded`}>
                <div
                  className={`h-48 h-auto w-48 rounded rounded-r-none flex-none bg-cover text-center overflow-hidden`}
                  style={{
                    backgroundImage:
                      "url('https://tailwindcss.com/img/card-left.jpg')"
                  }}
                  title="Woman holding a mug"
                ></div>
                <div
                  className={`${bgColor} rounded rounded-l-none bg-white p-4 flex flex-col justify-between leading-normal`}
                >
                  <div className="mb-8">
                    <p className={`text-sm ${notiColor} flex items-center`}>
                      <svg
                        className={`fill-current ${lockColor} w-3 h-3 mr-2`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      Members only
                    </p>
                    <div className={`${titleColor} font-bold text-xl mb-2`}>
                      Can coffee make you a better developer?
                    </div>
                    <p className={`${descriptionColor} text-base`}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src="https://tailwindcss.com/img/jonathan.jpg"
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm">
                      <p className={`${titleColor} leading-none`}>Jonathan Reinink</p>
                      <p className={notiColor}>Aug 18</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      }
    </ThemeContext.Consumer>
  }
}

Card.contextType = ThemeContext

export default Card
