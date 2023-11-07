import React from 'react'
// import { AiOutlineThunderbolt } from 
import data from "./data/data.json"
const Summary = () => {

    const colors = [
        {
            bColor: 'bg-[#fcf2f2]',
            tColor: 'text-[#ff5757]'
        },
        {
            bColor: ' bg-[#FFF6E6]',
            tColor: 'text-[#ffb01f]'
        },
        {
            bColor: ' bg-[#E6FFF9] ',
            tColor: 'text-[#00bd91]'
        },
        {
            bColor: ' bg-[#EBF1FF]',
            tColor: 'text-[#1125d4]'
        }


    ]
    console.log(data);


    return (
        <>

            <div className='flex h-[100%] w-[100%] flex-col sm:justify-center  '>
                <div className='h-[10%] flex mt-5 '>
                    <div className=' font-semibold  ml-2 text-lg font-Hanken_Grotesk text-slate-700 sm:text-xl'>Summary</div>
                </div>
                <div className='  h-[80%] flex flex-col justify-evenly items-center gap-3'>
                    {data.map((data, index) => (


                        <div className={`h-[25%] w-[90%] p-2  flex justify-between rounded-lg ${colors[index]?.bColor} items-center sm:h-[15%] sm:pl-2 sm:pr-2 sm: `} key={index} >
                            <div className='flex gap-3 '>
                                <div className='ml-1 flex items-center'>
                                    <img alt='img' src={data.icon} />
                                </div>

                                <div className={`${colors[index]?.tColor} font-semibold text-[.8rem] font-Hanken_Grotesk`}>{data?.category}</div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='font-semibold font-Hanken_Grotesk text-[.8rem]'>{data?.score}</div>
                                <div className='mr-1 font-semibold text-slate-400 font-Hanken_Grotesk text-[.8rem]'>  / 100</div>
                            </div>

                        </div>


                    ))}

                    <div className='h-[20%] w-[90%] bg-[#303B5A] rounded-3xl flex  justify-center items-center hover:bg-gradient-to-b from-[#7857ff] to-[#2e2be9] cursor-pointer shadow-xl sm:h-[13%]'>
                        <h1 className='text-white font-semibold font-Hanken_Grotesk'> Continue</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary