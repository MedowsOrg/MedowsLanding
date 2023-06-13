import {
    LockClosedIcon,
    DevicePhoneMobileIcon,
    HomeIcon,
    FaceSmileIcon,
    QuestionMarkCircleIcon,
    PhotoIcon
} from '@heroicons/react/20/solid'

import Image from 'next/image'
import Respone from '@/assets/Response.png'
import AnimateOnScroll from '@/hooks/AnimateOnScroll'


const features = [
    {
        name: 'Mobile Friendly.',
        description: "Connect with your care homes on the go, dictate your notes by the bedside & reduce your paper consumption",
        icon: DevicePhoneMobileIcon,
    },
    {
        name: 'Security First.',
        description: 'SHA-256 Encryption as standard, with full GDPR Compliance. Daily encrypted backups to preserve the integrity and privacy of your data, and adhere to strict data protection laws.',
        icon: LockClosedIcon,
    },
    {
        name: 'Simplicity.',
        description: 'From tech savvy to tech averse, Medows is for everyone. Simple to use, easy to learn.',
        icon: FaceSmileIcon,
    },
    {
        name: 'Requests & Tasks',
        description: 'Intuitive design promotes care home staff to provide as much detail as necessary, while clinicians can easily send tasks and follow up.',
        icon: QuestionMarkCircleIcon,
    },
    {
        name: 'Bed Management',
        description: 'Keep track of care home occupancy across your network. Next of Kin data available at a glance, alongside advanced care planning decisions and documents.',
        icon: HomeIcon,
    },
    {
        name: 'Images and Documents',
        description: 'Medical photography uploaded with requests, allowing clinicians to make safer clinical decisions. Documents uploaded to patient records to help empower nurses and carers effectively',
        icon: PhotoIcon,
    },
]

const VideoSection = () => {

    
    return (
        <>
            <div className="py-24 sm:py-32 show-on-scroll">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="max-w-2xl mx-auto sm:text-center">
                        <h2 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Make a big impact on the lives of those who live, Work & Support Care Homes</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-rose-500 sm:text-4xl">Simple. Streamlined. Safe.</p>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                        Say goodbye to inefficient and outdated methods, and hello to seamless, user-friendly communication with your care home patients. Try Medows for free and share the benefits of MEDOWS with your care homes 
                        </p>
                    </div>
                </div>
                <div className="relative pt-16 pb-16 overflow-hidden">
                    <div className="px-6 mx-auto max-w-7xl lg:px-8">
                        <AnimateOnScroll>
                        <Image
                            src={Respone}
                            alt="App screenshot"
                            className="shadow-2xl rounded-xl ring-1 ring-white/10"
                            width={2432}
                            height={1442}
                        />
                        </AnimateOnScroll>

                    </div>

                </div>
                <AnimateOnScroll>
                <div className="px-6 mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-24 lg:px-8">
                    <dl className="grid max-w-2xl grid-cols-1 mx-auto text-base leading-7 text-gray-900 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="inline font-semibold text-black">
                                    <feature.icon className="absolute w-5 h-5 top-1 left-1 text-rose-500" aria-hidden="true" />
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