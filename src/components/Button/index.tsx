'use client'
import { signOut } from "next-auth/react"

export const ButtonSignOut = () => {
    return(
        <button 
            className="bg-blue-700 text-yellow-50"
            onClick={() => signOut()}>Sign Out</button>
    )
}