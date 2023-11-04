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

            <div className='h-[15%] flex items-center'>
                <div className=' font-semibold  ml-2 text-[18px]'>Summary</div>
            </div>
            <div className='h-[70%] flex flex-col justify-evenly items-center'>
                {data.map((data, index) => (


                    <div className={`h-[15%] w-[90%]  flex justify-between rounded-lg ${colors[index]?.bColor} items-center`} key={index}>
                        <div className='flex gap-1 '>
                            <div className='ml-1 flex items-center'>
                                <img alt='img' src={data.icon} />
                            </div>

                            <div className={`${colors[index]?.tColor} font-semibold`}>{data?.category}</div>
                        </div>
                        <div className='flex gap-1'>
                            <div className='font-semibold'>{data?.score}</div>
                            <div className='mr-1 font-semibold text-slate-400'>  / 100</div>
                        </div>

                    </div>


                ))}
                {/* <div className='h-[15%] w-[90%]  flex justify-between rounded-lg bg-[#FFF6E6] items-center'>
                    <div className='text-[#ffb01f]'> Memory</div>
                    <div>92 / 100</div>
                </div>
                <div className='h-[15%] w-[90%]  flex justify-between rounded-lg bg-[#E6FFF9] items-center'>
                    <div className='text-[#00bd91]'>Verbal</div>
                    <div>61 / 100</div>
                </div>
                <div className='h-[15%] w-[90%]  flex justify-between rounded-lg bg-[#EBF1FF] items-center'>
                    <div className='text-[#1125d4]'>Visual</div>
                    <div>72 / 100</div>
                </div> */}
                <div className='h-[12%] w-[90%] bg-[#303B5A] rounded-3xl flex  justify-center items-center hover:bg-[#2e2be9] cursor-pointer shadow-xl'>
                    <h1 className='text-white font-semibold'> Continue</h1>

                </div>
            </div>
        </>
    )
}

export default Summary