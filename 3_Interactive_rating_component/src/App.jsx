import Rate from "./components/Rate"
import ThankYou from "./components/ThankYou"

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-[50%] h-[40%] border border-black">
          <Rate />
          <ThankYou />
        </div>

      </div>
    </>
  )
}

export default App
