import React from 'react'
import LearnButton from './(custom buttons)/learnbutton'
import { Button } from './ui/button'
import OurTeam from './OurTeam'

type Props = {}

const CareerSection2 = (props: Props) => {
    return (
        <section className='p-5 max-screen mx-auto py-32 h-full' id="Career">
            <div className='grid lg:grid-cols-2 grid-cols-1 w-full lg:gap-28 gap-5'>
                <div className='cols-span-1'>
                    <h2 className="text-4xl font-bold">Join the drive for human progress</h2>
                </div>
                <div className='col-span-1'>
                    <p className='text-md md:text-xl w-[95%]'>
                        Our people bring our purpose to life.
                        As part of a global, world-leading organization, they help to protect what matters.
                        Together, we push boundaries. Drive forward new ideas. Make choices that give customers, businesses and societies the confidence to thrive.
                    </p>
                    {/* Button */}
                    <div className=" gap-8 flex items-center my-5">
                        <div>
                            <LearnButton text='Meet the team' href='/our-team' />
                        </div>
                        <div>
                            <a href="/career" className='flex items-center'>
                                <Button >Read more</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <OurTeam />
            </div>
        </section>
    )
}

export default CareerSection2