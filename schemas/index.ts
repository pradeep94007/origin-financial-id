import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        "message": "Password is required"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email().min(1, {
        message: "Email is required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})


