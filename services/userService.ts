import {prisma} from "@/lib/db"

export const addUser = async(clerkUserId: string, name: string, email: string, image: string) => {
  try {
    const user = await prisma.user.upsert({
      where: {clerkUserId},
      update: {
        name,
        email,
        image
      },
      create: {
        clerkUserId,
        name,
        email,
        image
      }
    });
    return user

  }catch(error){
    console.error('Une erreur est survenue lors de la création de lutilisateur', error)
    throw error;
  }
}


export const getUser = async(clerkUserId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {clerkUserId}
    })
    return user

  }catch(error){
    console.error("une erreur est survenue lros de la recuperation de lutilisateur", error)
    throw error
  }
}