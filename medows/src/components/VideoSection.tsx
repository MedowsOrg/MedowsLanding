import {
    LockClosedIcon,
    DevicePhoneMobileIcon,
    HomeIcon,
    FaceSmileIcon,
    QuestionMarkCircleIcon,
    PhotoIcon
} from '@heroicons/react/20/solid'

import Image from 'next/image'
import Request from '@/assets/Request.png'
import Respone from '@/assets/Response.png'
import { useRef } from 'react'
import AnimateOnScroll from '@/hooks/AnimateOnScroll'


const features = [
    {
        name: 'Mobile Friendly.',
        description: "Connect with GP's on the go, while clinicians can access patient records right from their patients bedside. ",
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Security First.',
        description: 'SHA-256 Encryption as standard, with full GDPR Compliance. Daily encrytped backups taken to ensure your data is safe.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simplicity.',
        description: 'From tech savvy to tech averse, Medows is for everyone. Simple to use, easy to learn.',
        icon: FaceSmileIcon,
    },
    {
        name: 'Requests & Tasks',
        description: 'Intuitive design promotes care home staff to provide as much detail as necessary, while clinicians can easily set tasks and follow up. ',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Bed Management',
        description: 'Keep track of care home occupancy across your network. Next of Kin data available at a glance, alongside DNR, TSIF, allergies and more.',
        icon: HomeIcon,
    },
    {
        name: 'Images and Documents',
        description: 'Images can be uploaded to requests and tasks, allowing clinicians to see the patient in context. Documents can be uploaded to patient records to help with care planning.',
        icon: PhotoIcon,
    },
]

const VideoSection = () => {

    
    return (
        <>
            <div className="py-24 sm:py-32 show-on-scroll">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Everything you need to treat your Care Homes</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-rose-500 sm:text-4xl">Simple. Streamlined. Safe.</p>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            Medows streamlines communication, ensuring that all parties are on the same page and patient care is optimized.
                            Say goodbye to inefficient and outdated methods and hello to seamless, user-friendly communication.
                            Try our software and experience the benefits of modern healthcare technology.
                        </p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16 pb-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <AnimateOnScroll>
                        <Image
                            src={Respone}
                            alt="App screenshot"
                            className=" rounded-xl shadow-2xl ring-1 ring-white/10"
                            width={2432}
                            height={1442}
                        />
                        </AnimateOnScroll>

                    </div>

                </div>
                <AnimateOnScroll>
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-900 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-black">
                                    <feature.icon className="absolute top-1 left-1 h-5 w-5 text-rose-500" aria-hidden="true" />
                                    {feature.name}
                                </dt>{' '}
                                <dd className="inline">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                </AnimateOnScroll>
            </div>
        </>

    )
}

export default VideoSection