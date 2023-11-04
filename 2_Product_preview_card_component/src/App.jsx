import image from "./assets/image-product-desktop.jpg"
function App() {
  return (
    <>
      <div className="h-[100vh] w-[100wh] flex justify-center items-center ">
        <div className="h-[400px] w-[500px] flex justify-center items-center  shadow-2xl">
          <div className="h-[100%] w-[50%]  ">
            <img src={image} alt="img" className="h-[100%] bg-[violet] rounded-l-xl" />
          </div>
          <div className="h-[100%] w-[50%] flex justify-center items-center border border-[white] rounded-r-xl ">
            <div className="h-[90%] w-[90%] border border-black flex flex-col gap-2 justify-center items-center ">
              <div className="h-[10%] w-[100%] border-b border-black">
                <h1>PERFUME</h1>
              </div>
              <div className="h-[20%] w-[100%] border border-black">
                <p>Gabrielle Essence Eau De Parfume</p>
              </div>
              <div className="h-[30%] w-[100%] border border-black">
                <p>A floral, solar and voluptuous</p>
              </div>
              <div className="h-[15%] w-[100%] border border-black flex justify-between">
                <div className="h-[50%] w-[25%] border border-black">
                  <p>$149.99</p>
                </div>
                <div className="h-[50%] w-[25%] border border-black">
                  <p>$169.99</p>
                </div>
              </div>
              <div className="h-[10%] w-[95%] font-bold text-sm bg-[#3c8067] text-white flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#103b2b]">
                <p>Add to Cart</p>
              </div>
            </div>
          </div>
        </div>

      </div >
      {/* <div className="text-[red]">hi</div> */}

    </>
  )
}

export default App
