import AnimateOnScroll from '@/hooks/AnimateOnScroll';
import { ChevronRightIcon, StarIcon, HeartIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import HomeScreenshot from 'src/assets/HomeScreenshot.png'
import LogoWithName from 'src/assets/logo-with-name.svg'
import { useState } from 'react'
import { useRouter } from 'next/router'

const HeroSection = () => {
    const [email, setEmail] = useState('')

    const router = useRouter()
    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        router.push({ pathname: '/enquire', query: { email: email } })
    }

    return (
        <>
            <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div>
                        <div>
                            <Image
                                width={152}
                                height={44}
                                className="h-11 w-auto"
                                src={LogoWithName}
                                
                                alt="Medows Logo"
                            />
                        </div>
                        <div className="mt-20">
                            <div className="mt-6 sm:max-w-xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    Connecting Care Homes to Clinicians
                                </h1>
                                <p className="mt-6 text-xl text-gray-500">
                                    Facilitating safe and effective communication between Care Homes and Clinicians
                                </p>
                            </div>
                            <form action="#" className="mt-12 sm:flex sm:w-full sm:max-w-lg">
                                <div className="min-w-0 flex-1">
                                    <label htmlFor="hero-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="hero-email"
                                        type="email"
                                        className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                                        placeholder="Enter your email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-3">
                                    <button
                                        onClick={handleSubmit}
                                        className="block w-full rounded-md border border-transparent bg-rose-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                                    >
                                        Enquire
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="hidden sm:block">
                            <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                            <svg
                                className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                            </svg>
                        </div>
                        <div className="relative -mr-40 pl-6 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">

                            <div className="relative -mr-40 pl-6 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                                <AnimateOnScroll right>
                                    <Image
                                        width={720}
                                        height={488}
                                        className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                                        src={HomeScreenshot}
                                        alt=""
                                    />
                                </AnimateOnScroll>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HeroSection;