'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Link from 'next/link'
import { animate, motion, useScroll, useTransform } from 'framer-motion'

interface Iteam {
    name: string,
    testimonials: string,
    img: string,
    role: string,
}

type Props = {
    TeamArray: Iteam[]
    NoAnimate?: boolean
    NoShowText?: boolean
}

const ImageCarousel = ({ TeamArray, NoAnimate, NoShowText }: Props) => {

    const targetRef = useRef<HTMLDivElement>(null)
    // Get scrollYprogress
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-90%", "5%"]);


    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    // toggle the clamp of text
    const toggleClamp = (index: number) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [index]: !prevExpanded[index],
        }));
    };

    return (
        <>
            {TeamArray.map((team: any, j: number) => (

                <CarouselItem key={j} className=" lg:max-w-[100%] h-full cursor-pointer">
                    <motion.div className="relative" style={{ x: NoAnimate ? 0 : x }} ref={targetRef} transition={{ duration: 0.5 }} >
                        <Link href={'/career'}>
                            <Image src={team.image} width={500} height={500} className="object-cover lg:min-h-[450px] w-screen min-h-[400px] " alt={`${team.name}`} />
                        </Link>
                        <div className={`absolute bottom-0 left-0 right-0 bg-black ${NoShowText ? 'hidden' : 'block'} bg-opacity-70 text-white p-4 rounded-b-md`}>
                            <span className={expanded[j] ? 'line-clamp-none' : 'line-clamp-2'}>
                                "{team.testimonialDesc}"
                                <br />
                                <br />
                                <span className='font-bold text-xl'>{team.name}</span>
                                <br />
                                {team.role}
                            </span>
                            <br />
                            <span className="underline text-gray-400 cursor-pointer" onClick={() => toggleClamp(j)}>{expanded[j] ? 'Read less' : 'Read more'}</span>
                        </div>
                    </motion.div>
                </CarouselItem>
            ))}
        </>
    )
}

export default ImageCarousel