import Link from 'next/link'
import { Home, Layers, Cpu, Image, Calendar, BookOpen, Users, Briefcase, Mail, Settings, BookOpenCheck } from "lucide-react"
import WorkShopNavDyna from './WorkshopNavDyna'

function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-sky-600 to-blue-800 text-white flex flex-col p-6">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-8 tracking-wide">Pninfosys Panel</h2>

      {/* Nav */}
      <nav className="flex flex-col space-y-2">
        <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Home size={18} /> <span>Dashboard</span>
        </Link>
        <Link href="/admin/slider" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Layers size={18} /> <span>Slider</span>
        </Link>
        <Link href="/admin/technology" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Cpu size={18} /> <span>Technology</span>
        </Link>
        <Link href="/admin/portfolio" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Image size={18} /> <span>Portfolio</span>
        </Link>
        <Link href="/admin/event" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Calendar size={18} /> <span>Event</span>
        </Link>
        <Link href="/admin/course/adcourse" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <BookOpen size={18} /> <span>Course</span>
        </Link>
        <Link href="/admin/course/courseEnroll" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <BookOpenCheck size={18} /> <span>Course Enroll's</span>
        </Link>
        <Link href="/admin/placement" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Briefcase size={18} /> <span>Placement</span>
        </Link>
        <Link href="/admin/teammember" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Users size={18} /> <span>Team Members</span>
        </Link>
        <Link href="/admin/contact" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Mail size={18} /> <span>Contacts</span>
        </Link>

        {/* Workshops Section */}
        <div className="mt-6">
          <WorkShopNavDyna />
        </div>

        <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/20 transition">
          <Settings size={18} /> <span>Settings</span>
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar
