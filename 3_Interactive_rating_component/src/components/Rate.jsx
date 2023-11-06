import React from 'react'
import star from "../assets/icon-star.svg"

const Rate = () => {
    return (
        <div className='h-[90%] w-[90%]  flex flex-col gap-2 '>

            <div className='h-[13%] '>
                <div className='  flex justify-center items-center h-[35px] w-[35px] rounded-full bg-[#343538]'>
                    <img className='' src={star} alt="star" />
                </div>
            </div>
            <div className='h-[15%]  '>
                <h1 className='font-Overpass font-bold text-2xl text-white'>How did we do? </h1>
            </div>
            <div className='h-[32%]  '>
                <p className=' text-md font-Overpass font-md text-[#959eac]'>
                    Please let use know how we did with your support request. Akk feedback is appreciated to help us imporove our offering
                </p>
            </div>
            <div className='h-[20%] flex items-center gap-2 pl-2 text-[#959eac] '>
                <p className='h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#343538] hover:bg-[#fb7413] cursor-pointer'>1</p>
                <p className='h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#343538] hover:bg-[#fb7413] cursor-pointer'>2</p>
                <p className='h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#343538] hover:bg-[#fb7413] cursor-pointer'>3</p>
                <p className='h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#343538] hover:bg-[#fb7413] cursor-pointer'>4</p>
                <p className='h-[40px] w-[40px] rounded-full  flex justify-center items-center bg-[#343538] hover:bg-[#fb7413] cursor-pointer'>5</p>
            </div>
            <div className=' cursor-pointer h-[15%]  font-Overpass text-center text-[.8rem] font-semibold flex justify-center items-center rounded-3xl bg-[#fb7413] text-white hover:bg-[white] hover:text-[#fb7413]'>
                SUMBIT
            </div>

        </div>
    )
}

export default Rate