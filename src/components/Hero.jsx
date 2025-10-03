import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Digital Identity • Verified Profiles
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
            Grow your professional identity in a vibrant, modern network
          </h1>
          <p className="mt-3 text-slate-300 max-w-xl">
            Share updates, connect with peers, and showcase your work. An elegant take on the professional network experience.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button className="rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:brightness-110 transition">
              Create account
            </button>
            <button className="rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
