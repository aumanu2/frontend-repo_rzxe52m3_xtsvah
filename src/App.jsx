import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import EventCard from './components/EventCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '',
    email: '',
    category: 'other',
    idea: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/events?limit=12`)
        if (!res.ok) throw new Error('Failed to load events')
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  const submitContribution = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitted(false)
    setError('')
    try {
      const res = await fetch(`${API_BASE}/api/contributions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setSubmitted(true)
      setForm({ name: '', email: '', category: 'other', idea: '' })
    } catch (e) {
      setError(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Header />
      <Hero />

      <section id="events" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Upcoming & Recent Events</h2>
            <p className="text-gray-600 text-sm">Games, webinars, functions and more</p>
          </div>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading events...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : events.length === 0 ? (
          <p className="text-gray-600">No events yet. Be the first to suggest one below!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        )}
      </section>

      <section id="contribute" className="bg-white/70 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900">Contribute Your Idea</h2>
          <p className="text-gray-600 mb-6 text-sm">Tell us what game, webinar, or function you want to see next.</p>
          <form onSubmit={submitContribution} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select value={form.category} onChange={(e)=>setForm({...form, category: e.target.value})} className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                  <option value="games">Games</option>
                  <option value="webinars">Webinars</option>
                  <option value="functions">Functions</option>
                  <option value="workshops">Workshops</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Idea</label>
                <input value={form.idea} onChange={(e)=>setForm({...form, idea: e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Describe your idea" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button disabled={submitting} className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-60">
                {submitting ? 'Submitting...' : 'Submit Idea'}
              </button>
              {submitted && <span className="text-green-700 text-sm">Thank you! We'll review your idea.</span>}
              {error && <span className="text-red-600 text-sm">{error}</span>}
            </div>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Community Committee — Built for everyone to contribute
      </footer>
    </div>
  )
}

export default App
