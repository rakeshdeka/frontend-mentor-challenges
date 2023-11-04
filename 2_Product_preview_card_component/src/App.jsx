import image from "./assets/image-product-desktop.jpg"
import iconCart from "../public/icon-cart.svg"
function App() {
  return (
    <>
      <div className="h-[100vh] w-[100wh] flex justify-center items-center ">
        <div className="h-[400px] w-[500px] flex justify-center items-center shadow-lg rounded-r-2xl">
          <div className="h-[100%] w-[50%]  ">
            <img src={image} alt="img" className="h-[100%] bg-[violet] rounded-l-xl" />
          </div>
          <div className="h-[100%] w-[50%] flex justify-center items-center ">
            <div className="h-[95%] w-[90%]  flex flex-col gap-2 justify-center items-center  ">
              <div className="h-[5%] w-[100%]  flex items-center">
                <h1 className="text-[#6c7289] font-montserrat text-[.8rem] tracking-widest">PERFUME</h1>
              </div>
              <div className="h-[30%] w-[100%] flex items-center ">
                <p className="font-bold font-fraunces text-3xl text-[#1c232b]">Gabrielle Essence Eau De Parfume</p>
              </div>
              <div className="h-[30%] w-[100%] flex items-center">
                <p className="text-[14px] text-[#6c7289] font-md font-montserrat">A floral, solar and voluptuous iterpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
              </div>
              <div className="h-[15%] w-[90%]  flex gap-3">
                <div className="h-[100%]  flex items-center">
                  <p className="font-fraunces text-3xl text-[#3c8067]">$149.99</p>
                </div>
                <div className="h-[100%] flex items-center">
                  <p className="text-[.8rem] text-[#6c7289] line-through">$169.99</p>
                </div>
              </div>
              <div className="h-[10%] w-[95%] font-bold text-sm bg-[#3c8067] text-white flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#103b2b] gap-2">
                <img src={iconCart} alt="" />
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
