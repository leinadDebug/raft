import React from 'react'
import { ArrowsleftRight, CircleStack, Money } from '../assets'

const Financial = () => {
    return (
        <div className=' flex flex-col '>
            <div className=' flex flex-col gap-20 my-20 px-8'>
                <div className='text-white  flex flex-col text-center gap-6'>
                    <h1 className='text-4xl lg:text-6xl lg:pt-10'>Your Financial Freedom, Your Way</h1>
                    <p className='text-[#989898] lg:max-w-[40%] lg:m-auto'>
                        We believe that managing your finances should be effortless
                        and cost-effective.
                        That's why we offer you the freedom you deserve</p>
                </div>
                <div className='flex flex-col gap-10'>
                    <div>
                        <img className='lg:hidden' src='https://res.cloudinary.com/dhvwthnzq/image/upload/v1698236132/raft/Frame_1000001580_sjgkqd.png' />
                        <img className='hidden lg:flex' src='https://res.cloudinary.com/dhlv2hnt4/image/upload/v1698310616/Frame_31_2_fcb9zc.png' />
                    </div>
                    <div className='text-white flex flex-col lg:flex-row gap-8 justify-start lg:py-3'>
                        <div className='text-start flex flex-col gap-2'>
                            <span className=' flex items-center gap-2 font-medium lg:text-xl'><Money /> <p>No minimum balance fees</p></span>
                            <p className='text-[#989898] text-base '>Say goodbye to minimum balance fees. Your account, your balance—no hidden charges</p>
                        </div>
                        <div className='text-start flex flex-col gap-2 font-medium lg:text-xl'>
                            <span className=' flex items-center gap-2'><CircleStack /> <p>No monthly fees</p></span>
                            <p className='text-[#989898] text-base'>Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account</p>
                        </div>
                        <div className='text-start flex flex-col gap-2 font-medium lg:text-xl'>
                            <span className=' flex items-center gap-2'><ArrowsleftRight /> <p>No bank transfer fees</p></span>
                            <p className='text-[#989898] text-base'>Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#48D64C] flex justify-start px-8 text-left pr-5 text-[#070606] text-6xl leading-tight py-10 lg:text-[10em] lg:leading-normal lg:p-10'>
            Smart investments, secure payments, and expert guidance, all in one place.
            </div>
        </div>
    )
}

export default Financial