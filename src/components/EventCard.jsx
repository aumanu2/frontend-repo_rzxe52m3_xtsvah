import React from 'react'

function badgeColor(type) {
  switch (type) {
    case 'game':
      return 'bg-green-100 text-green-700'
    case 'webinar':
      return 'bg-blue-100 text-blue-700'
    case 'function':
      return 'bg-purple-100 text-purple-700'
    case 'workshop':
      return 'bg-amber-100 text-amber-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

function EventCard({ event }) {
  return (
    <div className="p-5 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${badgeColor(event.type)}`}>
          {event.type}
        </span>
      </div>
      {event.date || event.time || event.location ? (
        <div className="mt-2 text-sm text-gray-600 space-x-2">
          {event.date && <span>📅 {event.date}</span>}
          {event.time && <span>⏰ {event.time}</span>}
          {event.location && <span>📍 {event.location}</span>}
        </div>
      ) : null}
      {event.description && (
        <p className="mt-3 text-sm text-gray-600">{event.description}</p>
      )}
      {event.registration_link && (
        <a href={event.registration_link} target="_blank" className="inline-block mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-700">Register →</a>
      )}
    </div>
  )
}

export default EventCard
