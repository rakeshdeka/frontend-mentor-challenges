import { useState } from "react"
import Rate from "./components/Rate"
import ThankYou from "./components/ThankYou"


function App() {
  const [rating, setRating] = useState(null)
  const [selectedRating, setSelectedRating] = useState(null)
  // console.log(rating)
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#121417]">
        <div className="w-[400px] h-[350px] rounded-3xl  flex items-center justify-center bg-gradient-to-b from-[#252d37] to-[#15191e] sm:h-[410px] sm:w-[400px] md:w-[400px] lg:w-[400px]">
          {rating === null ? (
            <Rate setRating={setRating} setSelectedRating={setSelectedRating} selectedRating={selectedRating} />
          ) : (
            <ThankYou rating={rating} />
          )}
        </div>

      </div>
    </>
  )
}

export default App
