import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 -mt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <Sidebar />
          </aside>
          <section className="lg:col-span-6 order-1 lg:order-2">
            <Feed />
          </section>
          <aside className="lg:col-span-3 order-3 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur p-4">
                <h3 className="text-sm font-semibold text-slate-200">Trending Topics</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  <li>#FutureOfWork</li>
                  <li>#AI</li>
                  <li>#DesignSystems</li>
                  <li>#ProductManagement</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur p-4">
                <h3 className="text-sm font-semibold text-slate-200">Add to your feed</h3>
                <div className="mt-3 space-y-3">
                  {[
                    { name: 'Nova Analytics', tag: 'Company' },
                    { name: 'Ava Chen', tag: 'Creator' },
                    { name: 'Orbit UI', tag: 'Design' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-200">{item.name}</p>
                        <p className="text-xs text-slate-400">{item.tag}</p>
                      </div>
                      <button className="px-3 py-1 rounded-full bg-slate-800 text-slate-200 text-xs border border-slate-700 hover:bg-slate-700 transition">Follow</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
