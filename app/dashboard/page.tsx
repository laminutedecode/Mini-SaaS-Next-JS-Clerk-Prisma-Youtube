import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { addUser, getUser } from "@/services/userService";
import Image from "next/image"


export default async function PageDashboard() {

  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  const user = await currentUser();

  if(userId && user){
    const fullName = `${user.firstName} ${user.lastName}` || "";
    const email = user.emailAddresses[0]?.emailAddress || "";
    const image = user.imageUrl || "";
    await addUser(userId, fullName, email, image)
  }

  const data = await getUser(userId)

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col relative">
        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-md p-3 absolute top-6 right-6">Déconnexion</button>
        </SignOutButton>
      <form action="" className="max-w-[500px] w-full mx-auto flex flex-col space-y-2 shadow-md rounded-md p-3 ">
        <Image src={data?.image as string} width={150} height={150} alt="" className="rounded-full self-center"/>
        <label htmlFor="name" className="text-sm">Votre nom:</label>
        <input id="name" name="name" className="h-12 p-3 rounded-md border border-gray-300" type="text" defaultValue={data?.name} />
        <label htmlFor="email" className="text-sm">Votre email:</label>
        <input disabled id="email" name="email" className="bg-gray-200 text-gray-600 h-12 p-3 rounded-md border border-gray-300" type="email" defaultValue={data?.email} />

      </form>

    </section>
  );
}