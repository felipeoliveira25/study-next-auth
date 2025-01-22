'use client'
import { signIn } from "next-auth/react";

export default function Login(){

    
    return(
        <div className="bg-slate-500 p-20 w-screen h-screen flex flex-col justify-center items-center gap-4">
            <button 
                className="p-8 bg-green-500 text-cyan-50 rounded-md" 
                onClick={() => signIn("google", { callbackUrl: "/", redirect: true})}>
                    Conecte-se com Google
            </button>

            <button className="p-8 bg-cyan-600 text-cyan-50 rounded-md"
                    onClick={() => signIn("github", { callbackUrl: "/", redirect: true})}>
                    Conecte-se com GitHub
            </button>

            <button className="p-8 bg-red-600 text-cyan-50 rounded-md">
                    Conecte-se com Apple
            </button>
        </div>
    )
}