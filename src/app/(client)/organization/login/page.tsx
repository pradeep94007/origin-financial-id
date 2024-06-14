"use client"
import Header from "@/components/Header";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod'

import { LoginSchema } from "../../../../../schemas";

import { useForm } from "react-hook-form";

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      "email": "",
      "password": ""
    }
  })
  const onSubmit = (data: z.infer<typeof LoginSchema>) => console.log(data)

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Header />
        <section className="min-h-[570px] p-2 py-16">
          <div className="flex flex-col lg:flex-row sm:w-[90%] mx-auto px-3 md:px-10 py-5 shadow-2xl rounded-2xl">
            <div className="flex-1 p-5 sm:p-16 min-h-[250px] flex items-center justify-center">
              <Image
                src="/Assets/organization-assets/login-image.png"
                alt="login-image"
                width={500}
                height={250}
              />
            </div>
            <div className="flex flex-col gap-2 py-16 flex-1 sm:px-5 md:px-16 border-t-2 lg:border-t-0 lg:border-s-2">
              <h1 className="text-3xl font-medium">Log In.</h1>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your Email"
                className="p-2 border-b-2 my-1 mt-5"
              />
              <p className="text-destructive">{errors.email?.message}</p>

              <input
                type="password"
                {...register("password")}
                placeholder="Password"
                className="p-2 border-b-2 my-1"
              />
              <p className="text-destructive">{errors.password?.message}</p>

              <button className="bg-black text-white p-3 rounded-full font-semibold mt-3">
                Login
              </button>
              <button className="border-2 p-3 border-black rounded-full flex items-center gap-3 justify-center">
                <span>
                  <Image
                    src="/Assets/google-icon.png"
                    alt="google icon"
                    width={28}
                    height={28}
                  />
                </span>
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
}
