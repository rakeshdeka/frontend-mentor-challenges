import React from 'react'


export const Card = () => {
    return (
        <>
            <div className="h-[100vh] flex justify-center items-center ">
                <div className='flex  justify-center items-center  w-[600px] h-[500px] rounded-2xl shadow-2xl'>
                    <div className=' flex flex-col h-[100%] w-[50%]  rounded-2xl  bg-gradient-to-b from-[#7857ff] to-[#2e2be9] justify-center items-center'>
                        <h1 className='text-center'>You result</h1>
                        <div className='flex flex-col justify-center items-center rounded-full w-[150px] h-[150px] bg-gradient-to-b from-[#4e21caff] to-[#2421ca00] shadow-2xl'>
                            <p className='text-5xl font-semibold text-white'>76</p>
                            <p className='text-[#737373] font-semibold text-sm'>of 100</p>
                        </div>
                        <p className='text-center text-lg font-bold'>Great</p>
                        <p className='text-center'>You scored higher than 65% of the people who have taken these tests  </p>

                    </div>
                    <div className='h-[100%] w-[50%] '>summary</div>
                </div>
            </div >

        </>
    )
}
