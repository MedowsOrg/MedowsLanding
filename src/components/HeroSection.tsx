

import AnimateOnScroll from '@/hooks/AnimateOnScroll';
import Image from 'next/image'
import HomeScreenshot from '@/assets/HomeScreenshot.png'
import LogoWithName from '@/assets/logo-with-name.svg'
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Balancer from 'react-wrap-balancer';

const HeroSection = () => {


    return (
        <>
            <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-24">
                <div className="max-w-md px-6 mx-auto sm:max-w-3xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div>
                        <div>
                            <Image
                                width={152}
                                height={44}
                                className="w-auto h-11"
                                src={LogoWithName}
                                
                                alt="Medows Logo"
                            />
                        </div>
                        <div className="mt-20">
                            <div className="mt-6 sm:max-w-xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    <Balancer>Inspiring Healthier Ageing Communities</Balancer>
                                </h1>
                                <p className="mt-6 text-xl text-gray-500">
                                <Balancer>Making Primary Care accessible to everyone who lives and works in Care Homes.</Balancer>
                                </p>
                            </div>
                            <form action="#" className="mt-12 sm:flex sm:w-full sm:max-w-lg">
                                <div className="min-w-0">
                                   <Link href="/whatis">
                                        <Button>About</Button>
                                   </Link>
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-3">
                                    <Link href="/enquire">
                                        <Button>Enquire</Button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="hidden sm:block">
                            <div className="absolute inset-y-0 w-screen left-1/2 rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                            <svg
                                className="absolute -mr-3 top-8 right-1/2 lg:left-0 lg:m-0"
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
                        <div className="relative pl-6 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">

                            <div className="relative pl-6 -mr-40 max-w-7xl sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                                <AnimateOnScroll right>
                                    <Image
                                        className="rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto "
                                        src={HomeScreenshot}
                                        alt="Home Screenshot"
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