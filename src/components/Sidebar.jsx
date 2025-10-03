import React from 'react';

export default function Sidebar() {
  return (
    <div className="space-y-4">
      <ProfileCard />
      <Shortcuts />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur overflow-hidden">
      <div className="h-16 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20" />
      <div className="-mt-7 px-4">
        <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 border-4 border-slate-900" />
        <h3 className="mt-3 text-sm font-semibold">Alex Morgan</h3>
        <p className="text-xs text-slate-400">Product Designer • NYC</p>
      </div>
      <div className="mt-4 border-t border-slate-800 px-4 py-3 text-xs text-slate-300">
        <div className="flex items-center justify-between py-1">
          <span>Profile views</span>
          <span className="text-blue-300">127</span>
        </div>
        <div className="flex items-center justify-between py-1">
          <span>Post impressions</span>
          <span className="text-blue-300">2,304</span>
        </div>
      </div>
    </div>
  );
}

function Shortcuts() {
  const items = [
    'Saved Posts',
    'My Jobs',
    'Events',
    'Newsletters',
  ];
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur p-4">
      <h4 className="text-sm font-semibold text-slate-200">Shortcuts</h4>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((label) => (
          <li key={label} className="flex items-center justify-between">
            <span>{label}</span>
            <span className="text-slate-500">›</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
