"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Zap, FlameIcon as Fire, Heart } from "lucide-react"

const ticketTiers = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: 299,
    originalPrice: 399,
    icon: Zap,
    popular: true,
    availability: 75,
    maxAvailability: 100,
    features: [
      "Access to all sessions",
      "Conference materials",
      "Lunch & refreshments",
      "Networking events",
      "Digital certificate",
      "Early bird discount",
    ],
    color: "from-cyan-500 to-blue-500",
    vibe: "⚡ The Smart Choice",
    emoji: "🔥",
  },
  {
    id: "regular",
    name: "Regular",
    price: 399,
    icon: Star,
    popular: false,
    availability: 150,
    maxAvailability: 200,
    features: [
      "Access to all sessions",
      "Conference materials",
      "Lunch & refreshments",
      "Networking events",
      "Digital certificate",
    ],
    color: "from-purple-500 to-pink-500",
    vibe: "✨ The Classic",
    emoji: "💫",
  },
  {
    id: "vip",
    name: "VIP Experience",
    price: 599,
    icon: Crown,
    popular: false,
    availability: 25,
    maxAvailability: 50,
    features: [
      "All Regular features",
      "VIP seating area",
      "Exclusive networking dinner",
      "Meet & greet with speakers",
      "Premium conference swag",
      "Priority Q&A access",
      "Recorded session access",
    ],
    color: "from-yellow-500 to-orange-500",
    vibe: "👑 The Royal Treatment",
    emoji: "🚀",
  },
]

export default function TicketsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedTier, setExpandedTier] = useState<string | null>(null)

  const handleTicketPurchase = (tierId: string) => {
    // Enhanced confetti animation
    const colors = ["#ff1493", "#00e5ff", "#7c4dff", "#ff4081", "#00c853", "#ffd700"]
    const confettiCount = 100

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div")
      confetti.style.position = "fixed"
      confetti.style.left = Math.random() * 100 + "vw"
      confetti.style.top = "-10px"
      confetti.style.width = "12px"
      confetti.style.height = "12px"
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.pointerEvents = "none"
      confetti.style.zIndex = "9999"
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%"

      document.body.appendChild(confetti)

      const animation = confetti.animate(
        [
          { transform: "translateY(-10px) rotate(0deg)", opacity: 1 },
          { transform: `translateY(100vh) rotate(${Math.random() * 720}deg)`, opacity: 0 },
        ],
        {
          duration: Math.random() * 3000 + 2000,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        },
      )

      animation.onfinish = () => confetti.remove()
    }

    alert(`YESSS! 🎉 You just secured your ${tierId} ticket! This is gonna be EPIC! 🚀`)
  }

  return (
    <section id="tickets" className="py-20 relative z-10 bg-gradient-to-b from-slate-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
            <Fire className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-300 font-bold">Secure Your Spot</span>
            <Fire className="w-4 h-4 text-yellow-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Don't Sleep On
            </span>
            <br />
            <span className="text-white">These Tickets! 🎫</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Choose your vibe and get ready for the most iconic AI event of the year!
            <br />
            <span className="text-pink-400 font-bold">⚡ Prices going up soon - no cap! ⚡</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ticketTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${tier.popular ? "scale-105 z-10" : ""}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-2 px-6 rounded-full text-sm font-black border-2 border-white/20">
                    🔥 MOST POPULAR 🔥
                  </div>
                </div>
              )}

              <div className={`bg-gradient-to-br ${tier.color} p-[2px] rounded-3xl`}>
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-slate-800/90 transition-all duration-300 hover:scale-105">
                  <div className={`p-8 ${tier.popular ? "pt-12" : ""}`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className={`p-4 rounded-full bg-gradient-to-r ${tier.color} relative`}>
                        <tier.icon className="w-8 h-8 text-white" />
                        <span className="absolute -top-2 -right-2 text-2xl">{tier.emoji}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-center mb-2 text-white">{tier.name}</h3>
                    <p className="text-center text-gray-400 font-bold mb-4">{tier.vibe}</p>

                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-5xl font-black text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                          ${tier.price}
                        </span>
                        {tier.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">${tier.originalPrice}</span>
                        )}
                      </div>
                      {tier.originalPrice && (
                        <p className="text-pink-400 font-bold text-sm mt-1">
                          Save ${tier.originalPrice - tier.price}! 💰
                        </p>
                      )}
                    </div>

                    {/* Availability Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-400 mb-2 font-bold">
                        <span>🎫 Available</span>
                        <span>
                          {tier.availability}/{tier.maxAvailability}
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${(tier.availability / tier.maxAvailability) * 100}%` } : { width: 0 }
                          }
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className={`h-3 rounded-full bg-gradient-to-r ${tier.color} relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {tier.features
                        .slice(0, expandedTier === tier.id ? tier.features.length : 4)
                        .map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <div className={`p-1 rounded-full bg-gradient-to-r ${tier.color}`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-300 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                    </div>

                    {tier.features.length > 4 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedTier(expandedTier === tier.id ? null : tier.id)}
                        className="w-full mb-4 text-gray-400 hover:text-white font-bold"
                      >
                        {expandedTier === tier.id ? "Show Less ⬆️" : `Show ${tier.features.length - 4} More Features ⬇️`}
                      </Button>
                    )}

                    <Button
                      onClick={() => handleTicketPurchase(tier.name)}
                      className={`w-full py-4 text-lg font-black rounded-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20 ${
                        tier.popular
                          ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-2xl hover:shadow-pink-500/50"
                          : `bg-gradient-to-r ${tier.color} hover:opacity-90 text-white shadow-xl`
                      }`}
                    >
                      {tier.emoji} Secure My Spot! {tier.emoji}
                    </Button>
                  </div>
                </div>
              </div>
              <Star className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
              <p className="text-pink-300 font-bold">All tickets include 30-day access to recorded sessions!</p>
              <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
            </div>
            <p className="text-gray-400 font-medium">
              💳 Secure payment • 🔄 Full refund if cancelled • 👥 Group discounts for 5+ tickets
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
