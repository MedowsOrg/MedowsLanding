"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const EnquiryCTA = () => {


      const [email, setEmail] = useState('')

      const router = useRouter()
      const handleSubmit = (e: React.FormEvent<EventTarget>) => {
          e.preventDefault()
          router.push( `/enquire?email=${email}`)
      }


    return (
        <div className="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
          <svg className="absolute -ml-3 top-8 left-1/2" width={404} height={392} fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
          </svg>
        </div>
        <div className="max-w-md px-6 mx-auto sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <div className="relative px-6 py-10 overflow-hidden shadow-xl rounded-2xl bg-rose-500 sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-rose-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-rose-600 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Level Up Your Care Homes
                </h2>
                <p className="max-w-2xl mx-auto mt-6 text-lg text-rose-100">
                Get in touch to find out how Medows can help deliver your best work.
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
                <div className="flex-1 min-w-0">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    onClick={handleSubmit}
                    className="block w-full px-5 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                  >
                    Enquire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EnquiryCTA