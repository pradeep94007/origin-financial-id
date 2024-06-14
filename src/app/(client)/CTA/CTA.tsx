import { Button } from '@/components/ui/button'

type Props = {}

const CTA = (props: Props) => {
    return (
        <section className="p-5 " id="Faq">
            <div className='flex flex-col space-y-10 px-6 py-20 place-items-center text-center justify-center my-20  text-white bg-[#453862] rounded-2xl'>
                <h1 className='uppercase font-semibold '>
                    Get coverd with Origins Financial Today!
                </h1>
                <h1 className='md:text-4xl text-4xl font-extrabold'>
                    Discover the Path to Financial Freedom and a Peace of Mind!
                </h1>
                <span className='text-slate-300 text-xl'>Start securing your future today! Obtain a personalized financial plan and insure your peace of mind.</span>

                    <Button > Get started! </Button>
            </div>
        </section>
    )
}

export default CTA