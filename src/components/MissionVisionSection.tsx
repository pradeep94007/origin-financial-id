import React from 'react'
import { SlideInFromRight } from './animations/animations'
import Image from 'next/image'
import LearnButton from './(custom buttons)/learnbutton'

type Props = {}

const MissionVisionSection = (props: Props) => {
    return (
        <section
            id="Our-mission" 
            className="max-screen group text-whitesmoke lg:p-2 bg-[#a6b5c7] z-[-1]  lg:py-10  p-16  rounded-2xl overflow-x-hidden mx-auto flex flex-col-reverse md:flex-row md:gap-x-20 lg:gap-[510px] px-5 mt-20 "
        >
            <div className="flex-1 flex justify-center order-1 md:order-2">
                <Image
                    draggable={false}
                    src="/Assets/Home-section/Mission2.svg"
                    alt="about us avatar"
                    width={400}
                    height={500}
                    className="w-full h-full max-w-[500px] "
                />
            </div>
            <div className="flex-1 flex  flex-col gap-3 max-w-[600px] mx-auto md:order-2 ">
                <SlideInFromRight className='space-y-10 md:space-y-5'>
                    <div className="md:my-10">
                        <h1 className="lg:text-4xl text-3xl mb-5  font-bold tracking-tight leading-none">
                            Our Vision
                        </h1>
                        <p className=" text-xl lg:m-2 max-w-[500px] ">
                            Together we empower success
                        </p>
                    </div>
                    <br />
                    <div className="md:my-10">
                        <h1 className="lg:text-4xl text-3xl mb-5 font-bold tracking-tight leading-none">
                            Our Mission
                        </h1>
                        <p className="text-xl lg:m-2 max-w-[500px]">
                            Empowering you with personalized coverage, ensuring financial security and peace of mind.
                        </p>
                    </div>
                    {/* <LearnButton className='text-white relative md:ml-2 mt-10' text='Learn more'/> */}
                </SlideInFromRight>
            </div>
        </section>
    )
}

export default MissionVisionSection