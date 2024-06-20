import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardNav from "../components/dashboard/DashboardNav";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {

  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  return (
      <section className="mx-auto w-full min-h-[100vh] mt-2 p-2 flex">
        <div className="w-2/12 h-screen border-r border-gray-400 p-3">
          <DashboardNav/>
        </div>
        <div className="w-full">
          {children}
        </div>
        
        
      </section> 
  );
}
