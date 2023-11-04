import React from 'react'
import Summary from "./Summary"


export const Card = () => {
    return (
        <>
            <div className="h-[100vh] flex justify-center items-center ">
                <div className='flex  justify-center items-center  w-[700px] h-[500px] rounded-3xl shadow-2xl'>
                    <div className=' flex flex-col h-[100%] w-[50%]  rounded-3xl  bg-gradient-to-b from-[#7857ff] to-[#2e2be9] justify-center items-center'>

                        <div className='h-[15%] w-[100%] flex justify-center items-end'><h1 className='text-center font-bold text-xl text-[#D1BEE2] mb-2 '>Your result</h1>
                        </div>
                        <div className='h-[55%] w-[100%] flex justify-center items-center'>
                            <div className='flex flex-col justify-center items-center rounded-full w-[220px] h-[220px] bg-gradient-to-b from-[#4e21ca] to-[#2421ca01] shadow-2xl gap-1'>
                                <p className='text-7xl font-semibold text-white'>76</p>
                                <p className='text-[#737373] font-semibold text-sm'>of 100</p>
                            </div>
                        </div>
                        <div className='h-[10%] w-[100%] '>

                            <p className='text-center font-semibold text-3xl text-white '>Great</p>
                        </div>
                        <div className='h-[15%] w-[100%] '>
                            <p className='text-center h-[20%] w-[100%] text-[15px] font-semibold text-[#D1BEE2]' >You scored higher than 65% of the people who have taken these tests  </p>
                        </div>
                    </div>
                    <div className='h-[100%] w-[50%] flex flex-col justify-evenly'>
                        <Summary />


                    </div>


                </div>
            </div >

        </>
    )
}
