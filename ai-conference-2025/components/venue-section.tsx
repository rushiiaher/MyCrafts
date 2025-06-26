"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Car, Plane, Train, Hotel } from "lucide-react"

const venueInfo = {
  name: "Moscone Center",
  address: "747 Howard St, San Francisco, CA 94103",
  description:
    "Located in the heart of San Francisco, Moscone Center is a world-class convention facility that has hosted major tech conferences for decades.",
  features: [
    "State-of-the-art audio/visual equipment",
    "High-speed WiFi throughout",
    "Accessible facilities",
    "Multiple dining options",
    "Parking available on-site",
  ],
}

const travelOptions = [
  {
    icon: Plane,
    title: "By Air",
    description: "San Francisco International Airport (SFO) - 30 minutes by car or BART",
    color: "text-cyan-400",
  },
  {
    icon: Train,
    title: "By Train",
    description: "Powell Street BART Station - 5 minutes walk to venue",
    color: "text-purple-400",
  },
  {
    icon: Car,
    title: "By Car",
    description: "Valet parking available at venue ($25/day)",
    color: "text-pink-400",
  },
]

const nearbyHotels = [
  { name: "InterContinental San Francisco", distance: "0.2 miles", rating: 4.5 },
  { name: "W San Francisco", distance: "0.3 miles", rating: 4.4 },
  { name: "St. Regis San Francisco", distance: "0.4 miles", rating: 4.6 },
  { name: "Marriott Marquis San Francisco", distance: "0.1 miles", rating: 4.2 },
]

export default function VenueSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="venue" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Venue & Location
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us at the iconic Moscone Center in the heart of San Francisco
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Venue Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-white">{venueInfo.name}</h3>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{venueInfo.address}</p>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">{venueInfo.description}</p>

              <h4 className="text-lg font-semibold mb-4 text-white">Venue Features</h4>
              <ul className="space-y-2">
                {venueInfo.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019977!2d-122.4014418!3d37.7849074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807c95e5b7ab%3A0x40a14aea5c9d7c0!2sMoscone%20Center!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700">
              <img
                src="/images/moscone-center.jpg"
                alt="Moscone Center Interior"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Moscone Center</h4>
                <p className="text-gray-400 text-sm">World-class conference facility in downtown San Francisco</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Travel Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Getting There</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travelOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 text-center hover:border-slate-600 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <option.icon className={`w-8 h-8 ${option.color}`} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">{option.title}</h4>
                <p className="text-gray-300 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nearby Hotels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Recommended Hotels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyHotels.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Hotel className="w-5 h-5 text-orange-400" />
                  <h4 className="text-lg font-semibold text-white">{hotel.name}</h4>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">{hotel.distance}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-300">{hotel.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
