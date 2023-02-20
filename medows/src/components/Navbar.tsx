import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import LoginButton from './LoginButton'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navLinks = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'What is Medows?',
        href: '/about',
    },
    {
        name: 'Features',
        href: '/features',
    },
    {
        name: 'Team',
        href: '/team',
    },
    {
        name: 'Enquire',
        href: '/enquire',
    }
]


const Navbar = () => {
    const router = useRouter()
    const activeLink = navLinks.find((link) => link.href === router.pathname) || navLinks[0]

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    width={32}
                    height={32}
                    className="block h-8 w-auto lg:hidden"
                    src="/favicon.png"
                    alt="Medows Logo"
                  />
                  <Image
                    width={32}
                    height={32}
                    className="hidden h-8 w-auto lg:block"
                    src="/favicon.png"
                    alt="Medows Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className={link.href == activeLink.href ? 'inline-flex items-center border-b-2 border-rose-500 px-1 pt-1 text-sm font-medium text-gray-900' : 'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'}>
                            {link.name}
                        </Link>
                    ))}
                  
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <LoginButton/>

              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              
                {navLinks.map((link) => (
                    <Disclosure.Button
                        key={link.name}
                        as={Link}
                        href={link.href}
                        className={link.href == activeLink.href ? 'block border-l-4 border-rose-500 bg-rose-50 py-2 pl-3 pr-4 text-base font-medium text-rose-700' : ' block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'}
                    >
                        {link.name}
                    </Disclosure.Button>
                ))}
              
             
            </div>
            <LoginButton/>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar