import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const GlobalError = () => {
    return (
        <html>
            <body className="flex flex-col h-screen justify-center p-5 items-center bg-dove ">
                <div>
                    <Image src={'/Assets/404.svg'} alt='404' width={550} height={50} loading='lazy'/>
                </div>
                <div className="flex flex-col items-center my-5">
                    <a href="/">
                        <Button>Go home</Button>
                    </a>
                </div>
            </body>
        </html>
    )
}

export default GlobalError