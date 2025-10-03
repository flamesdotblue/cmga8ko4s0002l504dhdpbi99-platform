import React from 'react';
import { Home, Users, Briefcase, Bell, MessageSquare, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600" />
          <span className="hidden sm:block font-semibold tracking-tight">Linkr</span>
        </div>
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/70 pl-10 pr-4 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50"
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-5 text-slate-300">
          <NavIcon icon={<Home className="h-5 w-5" />} label="Home" active />
          <NavIcon icon={<Users className="h-5 w-5" />} label="My Network" />
          <NavIcon icon={<Briefcase className="h-5 w-5" />} label="Jobs" />
          <NavIcon icon={<MessageSquare className="h-5 w-5" />} label="Messaging" />
          <NavIcon icon={<Bell className="h-5 w-5" />} label="Notifications" />
        </nav>
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400" />
        </div>
      </div>
    </header>
  );
}

function NavIcon({ icon, label, active = false }) {
  return (
    <button
      className={`flex flex-col items-center justify-center gap-1 px-2 py-1 rounded-md transition ${
        active ? 'text-blue-400' : 'hover:text-slate-100'
      }`}
    >
      {icon}
      <span className="text-[11px]">{label}</span>
    </button>
  );
}
