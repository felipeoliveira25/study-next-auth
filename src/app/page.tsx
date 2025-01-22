
import { ButtonSignOut } from "@/components/Button";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";


export default async function Home() {

  const session = await getServerSession(authOptions)

  if(!session){
    redirect("/login")
  }
  return (
    <div className="bg-slate-500 p-20 w-screen h-screen flex flex-col justify-center items-center">
      <h2>Protected Page</h2>
      <Image className="rounded-full" src={session.user?.image} width={200} height={200} alt="" quality={100}/>
      <p>{session.user?.name}</p>
      <p>{session.user?.email}</p>
      <ButtonSignOut/>
    </div>
  );
}
