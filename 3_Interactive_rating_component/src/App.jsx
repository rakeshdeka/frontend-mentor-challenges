import Rate from "./components/Rate"
import ThankYou from "./components/ThankYou"

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#121417]">
        <div className="w-[80%] h-[40%] rounded-xl border border-black flex items-center justify-center  bg-[#252d37] sm:h-[50%] sm:w-[50%] md:w-[30%] lg:w-[30%]">
          {/* <Rate /> */}
          <ThankYou />
        </div>

      </div>
    </>
  )
}

export default App
