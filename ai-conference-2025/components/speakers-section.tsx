"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Linkedin, Twitter, Star, Crown, Zap } from "lucide-react"

const speakers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "AI Research Director",
    company: "Google DeepMind",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    bio: "Leading researcher in machine learning applications for healthcare. Dr. Chen has published over 50 papers on AI-driven medical diagnostics.",
    expertise: ["Healthcare AI", "Machine Learning", "Medical Diagnostics"],
    social: { linkedin: "#", twitter: "#" },
    vibe: "🧠 The Brain Behind AI Healthcare",
    color: "from-pink-500 to-purple-500",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "VP of AI Products",
    company: "Tesla",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Pioneering autonomous vehicle technology and smart transportation systems. 10+ years experience in AI-powered automotive solutions.",
    expertise: ["Autonomous Vehicles", "Computer Vision", "Robotics"],
    social: { linkedin: "#", twitter: "#" },
    vibe: "🚗 Making Cars Think",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    name: "Dr. Aisha Patel",
    title: "Chief AI Officer",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    bio: "Expert in natural language processing and conversational AI. Leading the development of next-generation AI assistants.",
    expertise: ["NLP", "Conversational AI", "Voice Technology"],
    social: { linkedin: "#", twitter: "#" },
    vibe: "🗣️ Voice of the Future",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    name: "James Kim",
    title: "Founder & CEO",
    company: "SmartHome AI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Entrepreneur focused on bringing AI to everyday home automation. Built the first AI-powered home management system.",
    expertise: ["IoT", "Smart Homes", "Edge Computing"],
    social: { linkedin: "#", twitter: "#" },
    vibe: "🏠 Home is Where AI Is",
    color: "from-green-500 to-cyan-500",
  },
  {
    id: 5,
    name: "Dr. Elena Vasquez",
    title: "AI Ethics Researcher",
    company: "Stanford University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    bio: 'Leading voice in AI ethics and responsible AI development. Author of "The Ethical AI Framework" bestselling book.',
    expertise: ["AI Ethics", "Policy", "Responsible AI"],
    social: { linkedin: "#", twitter: "#" },
    vibe: "⚖️ Keeping AI Real",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 6,
    name: "David Thompson",
    title: "Head of AI",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    bio: "Revolutionizing content recommendation systems and personalized entertainment experiences through advanced AI algorithms.",
    expertise: ["Recommendation Systems", "Personalization", "Content AI"],
    social: { linkedin: "#", twitter: "#" },
    vibe: "🎬 Your Next Binge Curator",
    color: "from-red-500 to-pink-500",
  },
]

export default function SpeakersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null)

  return (
    <section id="speakers" className="py-20 relative z-10 bg-gradient-to-b from-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Crown className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-bold">Meet The Icons</span>
            <Crown className="w-4 h-4 text-purple-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              These Speakers Are
            </span>
            <br />
            <span className="text-white">Absolutely ICONIC 👑</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Get ready to be inspired by the most innovative minds in AI! These legends are about to drop some serious
            knowledge 🔥
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer relative"
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className={`bg-gradient-to-br ${speaker.color} p-[2px] rounded-2xl`}>
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-slate-800/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold text-sm">{speaker.vibe}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {speaker.name}
                    </h3>
                    <p className="text-purple-400 font-bold mb-1">{speaker.title}</p>
                    <p className="text-gray-400 text-sm mb-4 font-medium">{speaker.company}</p>
                    <div className="flex flex-wrap gap-2">
                      {speaker.expertise.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 bg-gradient-to-r ${speaker.color} text-white text-xs rounded-full font-bold`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Speaker Modal */}
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-[2px] bg-gradient-to-r ${selectedSpeaker.color} rounded-full`}>
                      <img
                        src={selectedSpeaker.image || "/placeholder.svg"}
                        alt={selectedSpeaker.name}
                        className="w-20 h-20 rounded-full object-cover bg-slate-800"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                        {selectedSpeaker.name}
                      </h3>
                      <p className="text-purple-400 font-bold">{selectedSpeaker.title}</p>
                      <p className="text-gray-400 font-medium">{selectedSpeaker.company}</p>
                      <p className="text-pink-300 text-sm font-bold mt-1">{selectedSpeaker.vibe}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedSpeaker(null)}
                    className="text-gray-400 hover:text-white hover:bg-purple-500/20"
                  >
                    <X size={20} />
                  </Button>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-black mb-3 text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    The Tea ☕
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-medium">{selectedSpeaker.bio}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-black mb-3 text-white">Their Superpowers 🦸‍♀️</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSpeaker.expertise.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 bg-gradient-to-r ${selectedSpeaker.color} text-white text-sm rounded-full font-bold`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-purple-500/50 text-purple-300 hover:bg-purple-500/20 font-bold"
                  >
                    <Linkedin size={16} className="mr-2" />
                    Connect
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 font-bold"
                  >
                    <Twitter size={16} className="mr-2" />
                    Follow
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
