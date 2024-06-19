"use server"

import {prisma} from "@/lib/db"
import { redirect } from "next/navigation";

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

export const updateUser = async (formData: FormData) => {
  try {
    const userName = formData.get('name') as string; 
    const userJob = formData.get('job') as string; 
    const userDescription = formData.get('description') as string; 
    const userSite = formData.get('site') as string; 
    const id = formData.get('id') as string; 


    if (userName !== null) {
      await prisma.user.update({
        where: { id } ,
        data: { name: userName, job: userJob, description:userDescription , website: userSite},
      });
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }finally {
    redirect('/dashboard')
  } 
};