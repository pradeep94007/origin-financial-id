import React from 'react'
import { SlideInFromLeft, SlideInFromRight } from './animations/animations'
import QueAnsAccord from './FQAccordion'
import Image from 'next/image'
import { Button } from './ui/button'
import { useFetchDataOnClient } from '../../utils/useFetchDataOnClient'

type Props = {}

const FaqSection = (props: Props) => {
  const faqTitle:any = useFetchDataOnClient("faqsection")
  return (
    <>

      <section
        id="Faq" className="max-screen  text-dark overflow-x-hidden mx-auto p-5 mt-20">
        <div>
          <h1 className="md:text-6xl text-3xl font-bold md:mb-28">
            {faqTitle?.title}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row lg:gap-20">
          <SlideInFromLeft className="flex flex-1 justify-center items-start">
            <Image
              draggable={false}
              src="/Assets/Home-section/Thoughts.svg"
              alt="FAQ"
              width={600}
              height={50}
              className="w-full max-w-[600px] mb-10"
            />
          </SlideInFromLeft>
          <SlideInFromRight className="flex-1 flex flex-col gap-3 max-screen mx-auto">
            <QueAnsAccord />
          </SlideInFromRight>
        </div>
      </section>

      <section className="flex flex-col  place-items-center justify-center my-20 text-dark max-screen lg:mx-auto mx-5 whitespace-nowrap" id="Faq">
        <div className="text-xl mx-2 my-8 cursor-pointer text-extrabold">
          <span className='mx-4'>
            Still have questions?
          </span>
          <a href="/" className="italic underline transition-transform duration-300 ease-in-out ">
            <Button >Contact us</Button>
          </a>
        </div>
      </section>
    </>


  )
}

export default FaqSection