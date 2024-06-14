"use server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
// import { signIn } from '@/auth';
export const AdminLogin = async (email: string, password: string) => {
  try {
    const emailExists = await db.adminLogin.findFirst({
      where: {
        email,
      },
    });
    if (!emailExists) return { error: "Email doesn't exists" };
    const correctPassword = await bcrypt.compare(
      password,
      emailExists.password
    );
    if (!correctPassword) return { error: "Invalid credentials" };
    return { success: "Logging in..." };
  } catch (error) {
    return { error: error };
  }
};

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData
// ) {
//   try {
//     // await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return "Invalid credentials.";
//         default:
//           return "Something went wrong.";
//       }
//     }
//     throw error;
//   }
// }
