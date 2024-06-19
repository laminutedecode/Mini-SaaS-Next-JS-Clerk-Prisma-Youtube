import Link from "next/link"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {

  const { userId } = auth();

  if (userId) {
    redirect('/dashboard')
  }
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">
      <p className="text-lg uppercase text-muted-foreground">CLERK & PRISMA</p>
      <h1 className="text-8xl uppercase font-black">DASHBOARD</h1>
      <div className="flex items-center justify-center gap-2">
      <Link href="/sign-in"><button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-md text-white my-2">Se connecter</button></Link>
      <Link href="/sign-up"><button className="bg-blue-500 hover:bg-blue-600 p-3 rounded-md text-white my-2">S'inscrire</button></Link>
      </div>
    </section>
  );
}
