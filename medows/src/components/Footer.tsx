
import Link from 'next/link'
import Image from 'next/image'
import CE from "@/assets/footer/CE.png"
import digital from "@/assets/footer/digital.jpeg"
import hinm from "@/assets/footer/hinm.png"


const Footer = () => {
    return (
        <footer className="mt-24 bg-gray-900 sm:mt-12">
            <div className="mx-auto max-w-md overflow-hidden py-12 px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8 prose">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 place-items-center text-center text-gray-400">
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
                <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center mt-4">
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
                <div className="mt-8 flex justify-center space-x-6">

                </div>
                <p className="mt-8 text-center text-base text-gray-400">
                    &copy; {new Date().getFullYear()} Medows Ltd. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer;