
import Link from 'next/link'
import Image from 'next/image'
import CE from "@/assets/footer/ce.png"
import digital from "@/assets/footer/digital.jpeg"
import hinm from "@/assets/footer/hinm.png"


const Footer = () => {
    return (
        <footer className="mt-24 bg-gray-900 sm:mt-12">
            <div className="max-w-md px-6 py-12 mx-auto overflow-hidden prose sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-8 text-center text-gray-400 sm:grid-cols-2 place-items-center">
                    <div className=''>
                        <div className="">
                            Medows Ltd
                            </div>
                        <div className="">
                            Registered in England & Wales
                            </div>
                        <div className="">
                            Company No. 12996822
                        </div>
                    </div>
                    <div className=''>
                        <div className="">
                            Contact us at <Link href="mailto:support@medo.ws" className='text-rose-400'>support@medo.ws</Link>
                        </div>
                        <div className="">
                            Or get in touch via our <Link href="/enquire" className='text-rose-400'>contact form</Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mt-4 sm:grid-cols-3 place-items-center">
                    <Link href="/files/cyberessentials.pdf">
                        <Image src={CE} width={75} height={50} alt="Cyber Essentials" />
                    </Link>
                    <Link href="https://www.dsptoolkit.nhs.uk/OrganisationSearch/A9V3Z">
                        <Image src={digital} width={75} height={50} alt="NHS Digital Toolkit"/>
                    </Link>
                    <Link href="https://healthinnovationmanchester.com/">
                        <Image src={hinm} width={75} height={50} alt="Health Innovation Manchester" />
                    </Link>


                </div>
                <div className="flex justify-center mt-8 space-x-6">

                </div>
                <p className="mt-8 text-base text-center text-gray-400">
                    &copy; {new Date().getFullYear()} Medows Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;