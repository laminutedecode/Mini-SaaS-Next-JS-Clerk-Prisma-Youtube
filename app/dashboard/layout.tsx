import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardNav from "../components/dashboard/DashboardNav";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {

  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  return (
      <section className="mx-auto w-full mt-2 p-2">
        <div className="w-1/12">
          <DashboardNav/>
        </div>
        <div className="w-full">
          {children}
        </div>
        
        
      </section> 
  );
}
