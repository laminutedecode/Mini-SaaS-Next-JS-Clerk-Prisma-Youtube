import Link from "next/link"
import { CircleUser,PencilLine,Newspaper,LogOut } from 'lucide-react';
import { SignOutButton } from "@clerk/nextjs";

export default function DashboardNav() {

  const MenuDashboard = [
    {name: "Profil", path: "/dashboard", icon:CircleUser },
    {name: "Nouvelle note", path: "/dashboard/create", icon:PencilLine  },
    {name: "Vos notes", path: "/dashboard/singleUser", icon:Newspaper  },
  ]

  return (
    <nav>
        <div className="mb-4">
          {MenuDashboard.map((link, index)=> (
          <Link key={index} href={link.path} className="flex items-center gap-2 p-3 hover:bg-red-800 hover:text-white rounded-md">
            <link.icon className="w-4"/>
            <p className="text-sm">{link.name}</p>
          </Link>
        ))}
        </div>

        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-md p-3 flex items-center gap-2"><LogOut className="w-4" /><span>Déconnexion</span> </button>
        </SignOutButton>

    </nav>
  )
}
