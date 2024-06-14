import { ArrowUpCircle } from "lucide-react"

export const ContactForm = () => {

  return (
    <div className="cursor-pointer fixed lg:bottom-[0dvh] bottom-[1dvh] z-50 left-1/2 transform -translate-x-1/2 md:translate-y-1 lg:translate-y-3 translate-y-3 rounded-t-lg w-full md:max-screen  max-w-[93%] md:w-[94%] lg:w-[89.5%] bg-blue hover:bottom-2.5 transition-all duration-300 md:px-2 px-4 p-2 pb-4 text-center text-white text-md">
      <div className="flex">
        <a href="/" className="w-full">
          Get Started with Origins Financial!
        </a>
        <div>
          <ArrowUpCircle />
        </div>
      </div>
    </div>
  )
}

{/* <section className="relative w-100 py-[90px] px-3 bg-dark p-4">
  <div className="relative z-10 lg:w-4/5 mx-auto text-white flex flex-col sm:flex-row gap-5 sm:items-center p-4">
    <div className="flex-1">
      <h1 className="font-bold text-3xl mb-3">Make an appontment now</h1>
      <p>
        Make an appointment at our medical clinic and trust our
        professionals to take care <br /> of your health.
      </p>
    </div>
    <div className="flex gap-4 font-semibold flex-wrap">
      <button className="py-3 px-7 rounded-full bg-[rgb(127,162,228)]">
        Call Us
      </button>
      <button className="py-3 px-7 rounded-full bg-white text-[rgb(23,15,74)]">
        Write Us
      </button>
    </div>
  </div>
  <Image
    draggable={false}
    src="/Assets/patterns/small-paper-plane.svg"
    alt="Small paper plane"
    width={64}
    height={64}
    className="absolute right-9 top-5"
  />
</section> */}




