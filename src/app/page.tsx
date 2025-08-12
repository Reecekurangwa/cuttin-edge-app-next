"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function CuttinEdgeYouth() {
  // Use currentTime state to display the current time in the UI
  const [currentTime, setCurrentTime] = useState(new Date())
  // The setVerseOfDay setter is not used, so it has been removed for cleanup.
  const [verseOfDay] = useState({
    verse:
      "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
    reference: "Jeremiah 29:11",
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Sample data - in a real app this would come from a database
  const upcomingBirthdays = [
    { name: "Sarah Johnson", date: "Dec 15", age: 17 },
    { name: "Marcus Williams", date: "Dec 22", age: 16 },
    { name: "Emma Davis", date: "Jan 3", age: 18 },
  ]

  const leaders = [
    { name: "Pastor Mike", role: "Youth Pastor", image: "/placeholder.svg?height=120&width=120" },
    { name: "Sarah Chen", role: "Worship Leader", image: "/placeholder.svg?height=120&width=120" },
    { name: "David Rodriguez", role: "Small Groups Coordinator", image: "/placeholder.svg?height=120&width=120" },
  ]

  const upcomingEvents = [
    { title: "Youth Night", date: "Dec 14", time: "7:00 PM", type: "weekly" },
    { title: "Christmas Party", date: "Dec 21", time: "6:00 PM", type: "special" },
    { title: "New Year Retreat", date: "Dec 29-31", time: "All Day", type: "retreat" },
  ]

  const prayerRequests = [
    "Pray for Alex's family during this difficult time",
    "Wisdom for college decisions for our seniors",
    "Healing for Mrs. Thompson's recovery",
  ]

  // Icon Components
  const CalendarIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )

  const MapPinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )

  const BookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )

  const UsersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )

  const HeartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )

  const CakeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
    </svg>
  )

  const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${className}`}>
      {children}
    </div>
  )

  const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`px-6 py-4 border-b border-gray-100 ${className}`}>{children}</div>
  )

  const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`p-6 ${className}`}>{children}</div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white shadow-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 tracking-tight">Cuttin&apos; Edge</h1>
            <p className="text-lg sm:text-xl text-red-100 font-medium">Youth Ministry</p>
            <p className="text-sm sm:text-base text-red-200 mt-2">&apos;Be strong and courageous!&apos; - Joshua 1:9</p>
            {/* Display the current time */}
            <p className="text-sm sm:text-base text-red-200 mt-2">{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Current Track Banner */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 shadow-xl">
            <CardContent className="text-center py-8">
              <BookIcon className="w-8 h-8 mx-auto mb-3" />
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Current Track</h2>
              <p className="text-lg sm:text-xl font-semibold">&apos;Understanding the Trinity&apos;</p>
              <p className="text-sm sm:text-base opacity-90 mt-2">Week 3 of 6 • Exploring the Holy Spirit</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Verse of the Day */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <h3 className="text-lg sm:text-xl font-bold flex items-center">
                  <BookIcon className="mr-2" />
                  Verse of the Day
                </h3>
              </CardHeader>
              <CardContent>
                <blockquote className="text-base sm:text-lg text-gray-700 italic leading-relaxed mb-3">
                  &ldquo;{verseOfDay.verse}&rdquo;
                </blockquote>
                <cite className="text-sm sm:text-base font-semibold text-red-600">- {verseOfDay.reference}</cite>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-400 to-red-500 text-white">
                <h3 className="text-lg sm:text-xl font-bold flex items-center">
                  <CalendarIcon className="mr-2" />
                  Upcoming Events
                </h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="p-4 sm:p-6 hover:bg-red-50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="mb-2 sm:mb-0">
                          <h4 className="font-semibold text-gray-800 text-base sm:text-lg">{event.title}</h4>
                          <p className="text-sm text-gray-600">
                            {event.date} • {event.time}
                          </p>
                        </div>
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium self-start sm:self-center ${
                            event.type === "special"
                              ? "bg-red-100 text-red-800"
                              : event.type === "retreat"
                                ? "bg-red-200 text-red-900"
                                : "bg-red-50 text-red-700"
                          }`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaders */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <h3 className="text-lg sm:text-xl font-bold flex items-center">
                  <UsersIcon className="mr-2" />
                  Our Leaders
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {leaders.map((leader, index) => (
                    <div key={index} className="text-center">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 object-cover border-4 border-red-100"
                        width={120}
                        height={120}
                      />
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{leader.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{leader.role}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {/* Upcoming Birthdays */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                <h3 className="text-lg font-bold flex items-center">
                  <CakeIcon className="mr-2" />
                  Birthdays
                </h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {upcomingBirthdays.map((birthday, index) => (
                    <div key={index} className="p-4 hover:bg-red-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{birthday.name}</h4>
                          <p className="text-xs text-gray-600">Turning {birthday.age}</p>
                        </div>
                        <span className="text-sm font-medium text-red-600">{birthday.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-400 to-red-500 text-white">
                <h3 className="text-lg font-bold flex items-center">
                  <MapPinIcon className="mr-2" />
                  Find Us
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Grace Community Church</h4>
                    <p className="text-sm text-gray-600 mb-1">123 Faith Avenue</p>
                    <p className="text-sm text-gray-600 mb-3">Springfield, IL 62701</p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Youth Nights:</strong> Fridays 7:00 PM
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 text-center border border-red-100">
                    <MapPinIcon className="w-8 h-8 mx-auto mb-2 text-red-500" />
                    <p className="text-sm text-gray-600 mb-3">Click to open in Maps</p>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors shadow-md">
                      Get Directions
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prayer Requests */}
            <Card className="shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                <h3 className="text-lg font-bold flex items-center">
                  <HeartIcon className="mr-2" />
                  Prayer Requests
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {prayerRequests.map((request, index) => (
                    <div key={index} className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                      <p className="text-sm text-gray-700">{request}</p>
                    </div>
                  ))}
                  <button className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors shadow-md">
                    Submit Prayer Request
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section - Connect With Us */}
        <Card className="bg-gradient-to-r from-red-700 to-red-800 text-white shadow-xl">
          <CardContent className="text-center py-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-red-100 mb-6 text-sm sm:text-base">
              Follow us on social media and never miss an update!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md">
                Instagram
              </button>
              <button className="bg-white text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md">
                Facebook
              </button>
              <button className="bg-white text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md">
                YouTube
              </button>
              <button className="bg-white text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md">
                WhatsApp Group
              </button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-red-100">© 2024 Cuttin&apos; Edge Youth Ministry • Grace Community Church</p>
          <p className="text-xs text-red-200 mt-2">&apos;Train up a child in the way he should go&apos; - Proverbs 22:6</p>
        </div>
      </footer>
    </div>
  )
}