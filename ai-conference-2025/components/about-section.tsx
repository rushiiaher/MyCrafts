"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Users, Calendar, Award, Globe, FlameIcon as Fire, Heart, Star } from "lucide-react"

const stats = [
  { icon: Users, label: "Tech Besties", value: 2000, suffix: "+", color: "from-pink-500 to-purple-500" },
  { icon: Calendar, label: "Mind-Blowing Sessions", value: 50, suffix: "+", color: "from-cyan-500 to-blue-500" },
  { icon: Award, label: "Industry Icons", value: 30, suffix: "+", color: "from-purple-500 to-pink-500" },
  { icon: Globe, label: "Countries Represented", value: 25, suffix: "+", color: "from-green-500 to-cyan-500" },
]

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text"
    >
      {count}
      {suffix}
    </div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 relative z-10 bg-gradient-to-b from-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-6 py-2 mb-6">
            <Fire className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 font-bold">About This Iconic Event</span>
            <Fire className="w-4 h-4 text-pink-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              This Ain't Your Average
            </span>
            <br />
            <span className="text-white">Tech Conference 💯</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            We're bringing together the most innovative minds to explore how AI is literally changing everything! From
            your morning coffee routine to late-night Netflix binges - AI is everywhere and we're here for it! 🤖✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${stat.color} p-[2px] rounded-2xl`}>
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-slate-800/90 transition-all duration-300 group-hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <div className="text-gray-300 mt-2 font-semibold">{stat.label}</div>
                </div>
              </div>
              <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-8 border border-pink-500/30 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 animate-pulse" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
                <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                  Our Vibe Check ✨
                </h3>
                <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
              <p className="text-gray-200 text-center max-w-4xl mx-auto leading-relaxed text-lg font-medium">
                AI isn't just about robots taking over (though that's kinda cool too 🤖). It's about making life easier,
                more creative, and honestly just more fun! We're here to show you how AI can be your bestie in
                everything from work to play. Come for the tech, stay for the vibes! 🚀💫
              </p>

              <div className="flex justify-center mt-6 gap-4">
                <span className="text-2xl animate-bounce">🔥</span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: "0.1s" }}>
                  💯
                </span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: "0.2s" }}>
                  ✨
                </span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: "0.3s" }}>
                  🚀
                </span>
                <span className="text-2xl animate-bounce" style={{ animationDelay: "0.4s" }}>
                  💫
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
