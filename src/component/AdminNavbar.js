import React from "react"
import { LogOut, User } from "lucide-react"
import { useLogoutAdminMutation } from "../../redux/features/adminAuth/adminAuthAPi"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setAdmin } from "../../redux/features/adminAuth/adminAuthSlice"
import { persistor } from "../../redux/store" // make sure correct path
import { toast } from "react-toastify"

function AdminNavbar() {

  const [Adminlogout] = useLogoutAdminMutation()
  const navigate = useRouter()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      await Adminlogout().unwrap()       // server logout
      dispatch(setAdmin(null))           // Redux state clear
      await persistor.flush()            // Persist store sync
      await persistor.purge()            // Store clean

      toast.success("Logout Successful")

      // Force client-side navigation
      window.location.href = "/"  // safer than router.navigate in this case
    } catch (error) {
      console.log("Logout err", error)
      toast.error("Logout Failed")
    }
  }

  return (
    <header className="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center sticky top-0 z-30">
      {/* Left: Title */}
      <h1 className="text-lg md:text-xl font-semibold text-gray-800 tracking-wide">
        Dashboard
      </h1>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Profile */}
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          <User size={16} />
          <span className="hidden sm:inline">Profile</span>
        </button>

        {/* Logout */}
        <button onClick={handleLogout} className="flex items-center gap-2 cursor-pointer bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
          <LogOut size={16} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  )
}

export default AdminNavbar
