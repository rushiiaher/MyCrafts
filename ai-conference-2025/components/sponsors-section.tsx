"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const sponsors = {
  platinum: [
    { name: "Google", logo: "/images/google-logo.png" },
    { name: "Microsoft", logo: "/images/microsoft-logo.png" },
    { name: "OpenAI", logo: "/images/openai-logo.png" },
  ],
  gold: [
    { name: "Tesla", logo: "/images/tesla-logo.png" },
    { name: "NVIDIA", logo: "/images/nvidia-logo.png" },
    { name: "Meta", logo: "/images/meta-logo.png" },
    { name: "Amazon", logo: "/images/amazon-logo.png" },
  ],
  silver: [
    { name: "Spotify", logo: "/images/spotify-logo.png" },
    { name: "Uber", logo: "/images/uber-logo.png" },
    { name: "Airbnb", logo: "/images/airbnb-logo.png" },
    { name: "Netflix", logo: "/images/netflix-logo.png" },
    { name: "Salesforce", logo: "/images/salesforce-logo.png" },
    { name: "Adobe", logo: "/images/adobe-logo.png" },
  ],
}

export default function SponsorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sponsors" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Our Sponsors
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proudly supported by industry leaders and innovators
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-yellow-400">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-orange-400">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-400">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
