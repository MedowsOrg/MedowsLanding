import Connor from '@/assets/team/connor.jpg'
import Alex from '@/assets/team/facey.jpg'
import Josh from '@/assets/team/josh.jpg'
import AnimateOnScroll from '@/hooks/AnimateOnScroll'
import Image from 'next/image'
import Link from 'next/link'
import LinkedIn from '@/assets/linkedin.svg'
import Balancer from 'react-wrap-balancer'

const people = [
    {
        name: 'Alex Facey',
        role: 'Co-Founder / Clinical',
        imageUrl: Alex,
        bio: "With a clinical interest in care of the elderly, Alex designed the innovative software, Medows, to facilitate the coordination of care for his care homes within his PCN during the COVID-19 pandemic.\n\nAlex was shortlisted at the general practice awards 2020 for his work with the care homes and he continues to collaborate with GPs and clinicians to further understand how Medows can evolve to meet the needs of modern Primary Care.\n\nWhen he is not behind a desk, Alex will be on his bike in the Peaks or walking his dog, Maki.",
        linkedIn: 'https://www.linkedin.com/in/alex-facey/',
        linkedInShort: 'alex-facey'
    },
    {
        name: 'Connor Bradley',
        role: 'Co-Founder / Technical',
        imageUrl: Connor,
        bio: "A software engineer by trade, Connor is one of the founding members of Medows - his participation fuelled by an ever-growing interest in website design, security, and entrepreneurship.\n\n Outside of his Medows work, Connor coaches one of the top American Flag Football teams in the UK.",
        linkedIn: 'https://www.linkedin.com/in/connorbradley26/',
        linkedInShort: 'connorbradley26'
    },
    {
        name: 'Josh Nolan',
        role: 'Co-Founder / Technical',
        imageUrl: Josh,
        bio: "With over ten years experience as a Full-stack Web Developer - Josh is committed to creating feature-rich and intuitive web applications. With a focus on database design and scalability, he has played a vital role in the Medows software from day one. \n\nIn his spare time he enjoys long distance running when paired with celebratory beers.",
        linkedIn: 'https://www.linkedin.com/in/joshnolan-/',
        linkedInShort: 'joshnolan-'
    }
]

const TeamSection = () => {
    return (
        <div className="py-24 sm:py-32">
            <div className="grid px-6 mx-auto max-w-7xl gap-y-20 gap-x-8 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    Combining a wealth of experience in the healthcare and technology sectors, our Team at Medows is dedicated to our mission of improving the lives of those in care homes and Inspiring Healthier Ageing Communities, locally.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:gap-y-16 xl:col-span-2">
                    {people.map((person, i) => (
                        <li key={person.name}>
                            <div className="flex items-center prose gap-x-6">
                                <AnimateOnScroll right>
                                    <div className="flex flex-col md:grid md:grid-cols-[200px_auto]">
                                        <div className='flex flex-col justify-center w-full'>
                                            <Image className="flex justify-center w-32 h-32 mx-auto rounded-full" src={person.imageUrl} alt="" />
                                            <div className='flex flex-col justify-center mx-auto text-center'>
                                                <h3 className="w-full text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-rose-600">{person.role}</p>
                                                <div className='flex justify-center prose-img:mt-0'>
                                                    <Image className="w-6 h-6 mr-2 prose-img:fill-none" src={LinkedIn} alt="LinkedIn Logo" />
                                                    <Link className='text-indigo-500 no-underline prose-a:no-underline' href={person.linkedIn}>{person.linkedInShort}</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='my-auto text-center whitespace-pre-line md:text-left'>
                                            <Balancer>{person.bio}</Balancer>

                                        </div>
                                    </div>
                                </AnimateOnScroll>
                                {/* divider */}
                                    
                            </div>
                            {i !== people.length -1 ?  <div className="hidden w-full h-px mt-10 bg-gray-200 md:block" aria-hidden="true" /> : null}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default TeamSection