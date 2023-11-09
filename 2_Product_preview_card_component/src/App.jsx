import image from "./assets/image-product-desktop.jpg"
import iconCart from "/icon-cart.svg"
import imageMobile from "../src/assets/image-product-mobile.jpg"
function App() {
  return (
    <>
      <div className="h-[100vh] w-[100wh] flex justify-center items-center bg-[#f2ebe3] ">
        <div className="h-[600px] w-[300px] flex flex-col shadow-lg rounded-b-2xl sm:rounded-r-2xl sm:w-[430px] sm:h-[370px] bg-[#ffffff]">
          <div className="h-[100%] w-[100%] flex flex-col sm:flex-row ">

            <div className="h-[40%] w-[100%] sm:h-full  hidden sm:block">
              <img src={image} alt="img" className=" h-[100%] sm:w-full rounded-l-xl" />

            </div>
            <div className="h-[40%] w-[100%] sm:h-full sm:hidden">

              <img src={imageMobile} alt="imgMobile" className="sm:invisible h-[100%] w-full rounded-t-xl" />
            </div>
            <div className="h-[60%] w-[100%] flex justify-center sm:h-full sm:rounded-r-2xl ">
              <div className="h-[95%] w-[90%]  flex flex-col items-center  mt-3">
                <div className="h-[10%] w-[100%]  flex ">
                  <h1 className="text-[#6c7289] font-montserrat text-[.7rem] tracking-widest pt-2">PERFUME</h1>
                </div>
                <div className="h-[25%] w-[100%] flex sm:h-[25%] ">
                  <p className="font-bold font-fraunces text-[1.7rem] sm:text-[1.6rem] leading-7 sm:leading-6 text-[#1c232b] ">Gabrielle Essence Eau De Parfume</p>
                </div>
                <div className="h-[25%] w-[100%] flex sm:h-[30%]">
                  <p className="text-[.85rem] text-[#6c7289] font-md font-montserrat sm:text-[.75rem] sm:leading-5 sm:pt-2">A floral, solar and voluptuous iterpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                </div>
                <div className="h-[15%] w-[100%]  flex gap-3 pb-2">
                  <div className="h-[100%]  flex items-center">
                    <p className="font-fraunces text-3xl sm:text-2xl text-[#3c8067]">$149.99</p>
                  </div>
                  <div className="h-[100%] flex items-center">
                    <p className="text-[.8rem] text-[#6c7289] line-through">$169.99</p>
                  </div>
                </div>
                <div className="h-[12.5%] w-[100%] font-bold text-sm bg-[#3c8067] text-white flex justify-center items-center rounded-lg cursor-pointer hover:bg-[#103b2b] gap-2">
                  <img src={iconCart} alt="" />
                  <p>Add to Cart</p>
                </div>
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
