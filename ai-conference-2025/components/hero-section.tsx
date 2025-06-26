"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Sparkles, Zap, Star } from "lucide-react"

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000).getTime() // 1 day from now

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const scrollToTickets = () => {
    const element = document.querySelector("#tickets")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,20,147,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Trendy Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-pink-300 font-medium">✨ The Most Lit AI Event of 2025 ✨</span>
            <Zap className="w-4 h-4 text-purple-400" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              AI in Daily Life
            </span>
            <br />
            <span className="text-white drop-shadow-lg">2025</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto font-bold"
          >
            Where AI meets IRL 🔥 <br />
            <span className="text-lg text-pink-300">No cap, this is gonna be ICONIC</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-gray-200"
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">March 15-16, 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="font-semibold">San Francisco</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-pink-500/30">
              <Users className="w-5 h-5 text-pink-400" />
              <span className="font-semibold">2000+ Tech Besties</span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-4 gap-4 max-w-lg mx-auto mb-12"
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="relative">
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300 hover:scale-105">
                  <motion.div
                    key={value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text"
                  >
                    {value.toString().padStart(2, "0")}
                  </motion.div>
                  <div className="text-xs text-pink-300 uppercase tracking-wider font-bold">{unit}</div>
                </div>
                {/* Floating stars */}
                <Star className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <Button
              onClick={scrollToTickets}
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-black rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 border-2 border-white/20"
            >
              🎫 Get Your Tickets NOW! 🚀
            </Button>
            <p className="text-pink-300 text-sm font-medium animate-bounce">
              ⚡ Early bird prices ending soon! Don't sleep on this! ⚡
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
