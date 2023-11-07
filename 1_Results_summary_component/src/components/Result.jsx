import React from 'react'

const Result = () => {
    return (
        <>
            <div className=' flex flex-col h-[100%] w-[100%]  rounded-b-3xl  bg-gradient-to-b from-[#7857ff] to-[#2e2be9] justify-center items-center sm:rounded-3xl gap-3'>


                <div className='h-[15%] w-[100%] flex justify-center items-end '><h1 className='text-center font-bold text-lg sm:text-xl text-slate-200 mb-2 font-Hanken_Grotesk '>Your result</h1>
                </div>
                <div className='h-[40%] w-[100%] flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center rounded-full w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] bg-gradient-to-b from-[#4e21ca] to-[#2421ca01] gap-1'>
                        <p className='text-5xl font-semibold text-white font-Hanken_Grotesk sm:text-7xl'>76</p>
                        <p className='text-[#737373] font-semibold text-sm font-Hanken_Grotesk'>of 100</p>
                    </div>
                </div>
                <div className='h-[10%] w-[100%] '>

                    <p className='text-center font-semibold text-2xl text-white font-Hanken_Grotesk sm:text-3xl'>Great</p>
                </div>
                <div className='h-[20%] w-[100%] flex justify-center '>
                    <p className='text-center h-[20%] w-[60%] text-[.8rem] sm:text-[15px] font-md text-[#D1BEE2] font-Hanken_Grotesk' >You scored higher than 65% of the people who have taken these tests  </p>
                </div>
            </div>
        </>
    )
}

export default Result