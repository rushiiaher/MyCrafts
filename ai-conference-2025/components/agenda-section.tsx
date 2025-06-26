"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, User } from "lucide-react"

const agendaData = {
  "Day 1": [
    {
      time: "9:00 AM",
      title: "Opening Keynote: The Future of AI in Daily Life",
      speaker: "Dr. Sarah Chen",
      room: "Main Auditorium",
      type: "keynote",
    },
    {
      time: "10:30 AM",
      title: "AI in Healthcare: Transforming Patient Care",
      speaker: "Dr. Michael Roberts",
      room: "Hall A",
      type: "session",
    },
    {
      time: "11:30 AM",
      title: "Smart Homes: The AI Revolution in Living Spaces",
      speaker: "James Kim",
      room: "Hall B",
      type: "session",
    },
    {
      time: "1:00 PM",
      title: "Lunch & Networking",
      speaker: "",
      room: "Exhibition Hall",
      type: "break",
    },
    {
      time: "2:30 PM",
      title: "Autonomous Vehicles: Driving into the Future",
      speaker: "Marcus Rodriguez",
      room: "Main Auditorium",
      type: "session",
    },
    {
      time: "3:30 PM",
      title: "AI Ethics: Building Responsible Systems",
      speaker: "Dr. Elena Vasquez",
      room: "Hall A",
      type: "session",
    },
    {
      time: "4:30 PM",
      title: "Panel: AI in Entertainment & Media",
      speaker: "David Thompson & Others",
      room: "Main Auditorium",
      type: "panel",
    },
  ],
  "Day 2": [
    {
      time: "9:00 AM",
      title: "Conversational AI: The Next Generation",
      speaker: "Dr. Aisha Patel",
      room: "Main Auditorium",
      type: "keynote",
    },
    {
      time: "10:30 AM",
      title: "AI in Finance: Revolutionizing Banking",
      speaker: "Jennifer Walsh",
      room: "Hall A",
      type: "session",
    },
    {
      time: "11:30 AM",
      title: "Edge Computing: AI at the Edge",
      speaker: "Robert Chang",
      room: "Hall B",
      type: "session",
    },
    {
      time: "1:00 PM",
      title: "Lunch & Networking",
      speaker: "",
      room: "Exhibition Hall",
      type: "break",
    },
    {
      time: "2:30 PM",
      title: "AI in Education: Personalized Learning",
      speaker: "Dr. Lisa Martinez",
      room: "Hall A",
      type: "session",
    },
    {
      time: "3:30 PM",
      title: "Computer Vision: Seeing the World Through AI",
      speaker: "Alex Johnson",
      room: "Hall B",
      type: "session",
    },
    {
      time: "4:30 PM",
      title: "Closing Keynote: The Road Ahead",
      speaker: "Dr. Sarah Chen",
      room: "Main Auditorium",
      type: "keynote",
    },
  ],
  Workshops: [
    {
      time: "9:00 AM - 12:00 PM",
      title: "Hands-on: Building Your First AI Assistant",
      speaker: "Workshop Team",
      room: "Workshop Room 1",
      type: "workshop",
    },
    {
      time: "1:00 PM - 4:00 PM",
      title: "Machine Learning for Beginners",
      speaker: "Workshop Team",
      room: "Workshop Room 2",
      type: "workshop",
    },
    {
      time: "9:00 AM - 5:00 PM",
      title: "Advanced Deep Learning Techniques",
      speaker: "Dr. Neural Networks",
      room: "Workshop Room 3",
      type: "workshop",
    },
  ],
}

const getSessionTypeColor = (type: string) => {
  switch (type) {
    case "keynote":
      return "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/50"
    case "panel":
      return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/50"
    case "workshop":
      return "bg-gradient-to-r from-green-500/20 to-cyan-500/20 border-green-500/50"
    case "break":
      return "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/50"
    default:
      return "bg-slate-800/50 border-slate-600"
  }
}

export default function AgendaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("Day 1")

  const tabs = Object.keys(agendaData)

  return (
    <section id="agenda" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Conference Agenda
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Two days packed with insights, workshops, and networking opportunities
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-slate-700">
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variant={activeTab === tab ? "default" : "ghost"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Agenda Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {agendaData[activeTab as keyof typeof agendaData].map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-6 border backdrop-blur-sm ${getSessionTypeColor(session.type)}`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm min-w-[120px]">
                  <Clock size={16} />
                  {session.time}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{session.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-400 text-sm">
                    {session.speaker && (
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        {session.speaker}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {session.room}
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                      session.type === "keynote"
                        ? "bg-cyan-500/20 text-cyan-300"
                        : session.type === "panel"
                          ? "bg-purple-500/20 text-purple-300"
                          : session.type === "workshop"
                            ? "bg-green-500/20 text-green-300"
                            : session.type === "break"
                              ? "bg-orange-500/20 text-orange-300"
                              : "bg-slate-500/20 text-slate-300"
                    }`}
                  >
                    {session.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
