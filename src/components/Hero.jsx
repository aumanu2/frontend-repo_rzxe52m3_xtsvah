import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-200 blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              A Home for Games, Webinars, and Community Functions
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Our committee brings people together through engaging games, insightful webinars, and memorable functions. Join us, share your ideas, and help us create experiences that matter.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#events" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">Explore Events</a>
              <a href="#contribute" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">Contribute Ideas</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-700">Games</p>
              <p className="text-xs text-gray-500">Tournaments • Team Play • Quizzes</p>
            </div>
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-700">Webinars</p>
              <p className="text-xs text-gray-500">Learning • Talks • Panels</p>
            </div>
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-700">Functions</p>
              <p className="text-xs text-gray-500">Festivals • Ceremonies • Meetups</p>
            </div>
            <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100">
              <p className="text-sm font-medium text-gray-700">Volunteer</p>
              <p className="text-xs text-gray-500">Plan • Host • Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
