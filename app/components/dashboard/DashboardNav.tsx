import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs";
import { FaUser, FaSignOutAlt  } from "react-icons/fa";

export default function DashboardNav() {



  return (
    <nav>
        <div className="mb-4">

          <Link href="/dashboard" className="flex items-center gap-2 p-3 hover:bg-red-800 hover:text-white rounded-md">
          <FaUser/>
            <p className="text-sm">Profil</p>
          </Link>
 
        </div>

        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-md p-3 flex items-center gap-2"><FaSignOutAlt   /><span>Déconnexion</span> </button>
        </SignOutButton>

    </nav>
  )
}
