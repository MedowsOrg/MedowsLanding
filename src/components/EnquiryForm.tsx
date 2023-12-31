"use client" 

import { useEffect, useState} from 'react'
import SelectBox from '@/components/SelectBox'
import { useParams, useRouter, useSearchParams } from 'next/navigation'


const organizationType = [
    { id: 1, name: 'Integrated Care System'},
    { id: 2, name: 'Primary Care Network' },
    { id: 3, name: 'Individual Practice' },
    { id: 4, name: 'Care Home' },
    { id: 5, name: 'Other' },
]


const EnquiryFrom = () => {

    const [formState, setFormState] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [selected, setSelected] = useState(organizationType[0])
    const [additional, setAdditional] = useState("")

    const router = useRouter();
    const searchParams =  useSearchParams();
    const emailParam = searchParams?.get("email");


    useEffect(() => {
         if (emailParam) {
             console.log(emailParam)
             setEmail(emailParam as string)
         }
    }, [emailParam])

    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        fetch('https://formspree.io/f/xqkwnobr', {
          method: 'POST',
          body: JSON.stringify({
            Name: name,
            Email: email,
            Position: selected.name,
            Additional: additional,
          }),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          router.push("/enquire/success?name=" + name)
        }
      )
      .catch((error) => {
        console.error('Error:', error);
        return <p>Sorry, there was an error submitting your enquiry. Please try again later.</p>;
      });
    }

  return (
    <div className="px-6 py-16 overflow-hidden lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute transform translate-x-1/2 left-full"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute bottom-0 transform -translate-x-1/2 right-full"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Let us know your contact details and a member of the team will be in touch to discuss how Medows could help you.
          </p>
        </div>
        <div className="mt-12">
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
           
            <div className="sm:col-span-2">
              <label htmlFor="ContactName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="ContactName"
                  id="name"
                  autoComplete="name"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <SelectBox list={organizationType} setSelected={setSelected} selected={selected} title="Organisation Type" name="Position"/>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="Email"
                  name="Email"
                  type="Email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
           
            <div className="sm:col-span-2">
              <label htmlFor="Additional" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <div className="mt-1">
                <textarea
                  id="Additional"
                  name="Additional"
                  rows={4}
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  defaultValue={''}
                  onChange={(e) => setAdditional(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EnquiryFrom
