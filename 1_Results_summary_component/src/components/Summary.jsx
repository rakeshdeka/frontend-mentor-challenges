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

            <div className='flex h-[100%] w-[90%] flex-col  justify-center '>
                <div className='h-[10%] flex  '>
                    <div className=' font-semibold  ml-2 text-2xl font-Hanken_Grotesk text-slate-700'>Summary</div>
                </div>
                <div className='h-[75%] flex flex-col justify-evenly items-center'>
                    {data.map((data, index) => (


                        <div className={`h-[15%] w-[90%]  flex justify-between rounded-lg ${colors[index]?.bColor} items-center`} key={index}>
                            <div className='flex gap-3 '>
                                <div className='ml-1 flex items-center'>
                                    <img alt='img' src={data.icon} />
                                </div>

                                <div className={`${colors[index]?.tColor} font-semibold font-Hanken_Grotesk`}>{data?.category}</div>
                            </div>
                            <div className='flex gap-1'>
                                <div className='font-semibold font-Hanken_Grotesk'>{data?.score}</div>
                                <div className='mr-1 font-semibold text-slate-400 font-Hanken_Grotesk'>  / 100</div>
                            </div>

                        </div>


                    ))}

                    <div className='h-[12%] w-[90%] bg-[#303B5A] rounded-3xl flex  justify-center items-center hover:bg-gradient-to-b from-[#7857ff] to-[#2e2be9] cursor-pointer shadow-xl'>
                        <h1 className='text-white font-semibold font-Hanken_Grotesk'> Continue</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary