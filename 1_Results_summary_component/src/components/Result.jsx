import React from 'react'

const Result = () => {
    return (
        <>
            <div className=' flex flex-col h-[100%] w-[50%]  rounded-3xl  bg-gradient-to-b from-[#7857ff] to-[#2e2be9] justify-center items-center'>

                <div className='h-[15%] w-[100%] flex justify-center items-end '><h1 className='text-center font-bold text-2xl text-slate-200 mb-2 font-Hanken_Grotesk '>Your result</h1>
                </div>
                <div className='h-[55%] w-[100%] flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center rounded-full w-[220px] h-[220px] bg-gradient-to-b from-[#4e21ca] to-[#2421ca01] gap-1'>
                        <p className='text-7xl font-semibold text-white font-Hanken_Grotesk'>76</p>
                        <p className='text-[#737373] font-semibold text-sm font-Hanken_Grotesk'>of 100</p>
                    </div>
                </div>
                <div className='h-[10%] w-[100%] '>

                    <p className='text-center font-semibold text-3xl text-white font-Hanken_Grotesk'>Great</p>
                </div>
                <div className='h-[20%] w-[100%] flex justify-center '>
                    <p className='text-center h-[20%] w-[60%] text-[15px] font-md text-[#D1BEE2] font-Hanken_Grotesk' >You scored higher than 65% of the people who have taken these tests  </p>
                </div>
            </div>
        </>
    )
}

export default Result