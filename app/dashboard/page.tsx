import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { addUser, getUser, updateUser } from "@/services/userService";
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
    <section className="w-full h-screen p-3 ">
      <div className="m-4">
        <p className="text-muted-foreground uppercase text-red-600">Vos informations</p>
        <h1 className="text-xl uppercase font-black md:text-2xl lg:text-4xl">Profil</h1>
      </div>
    
      <form  action={updateUser} className="w-full flex flex-col space-y-3 rounded-md p-3 ">
        <input type="hidden" name="id" id="id" value={data?.id} />
        <Image src={data?.image as string} width={100} height={100} alt="" className="rounded-full"/>
        <label htmlFor="name" className="text-sm">Votre nom:</label>
        <input id="name" name="name" className="h-12 p-3 rounded-md border border-gray-300" type="text" defaultValue={data?.name} />
        <label htmlFor="email" className="text-sm">Votre email:</label>
        <input disabled id="email" name="email" className="bg-gray-200 text-gray-600 h-12 p-3 rounded-md border border-gray-300" type="email" defaultValue={data?.email} />
        <label htmlFor="job" className="text-sm">Votre métier:</label>
        <input id="job" name="job" className="h-12 p-3 rounded-md border border-gray-300" type="text" defaultValue={data?.job as string} />
        <label htmlFor="description" className="text-sm">Votre description:</label>
        <textarea id="description" name="description" className="h-24 p-3 rounded-md border border-gray-300" defaultValue={data?.description as string}  />
        <label htmlFor="site" className="text-sm">Votre site:</label>
        <input id="site" name="site" className="h-12 p-3 rounded-md border border-gray-300" type="url" defaultValue={data?.website as string}  />
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md">Modifier</button>

      </form>

    </section>
  );
}