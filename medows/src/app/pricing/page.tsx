import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

const tiers = [
  {
    name: 'Free',
    id: 'tier-free',
    href: '/pricing/enquire?tier=free',
    price: { monthly: '£0' },
    description: '£0 - free forever ',
    features: [
        'For Practices/PCNs with less than 30 care home beds', 
        'For small practices looking to make a difference' 
    ],
  },
  {
    name: 'Standard',
    id: 'tier-standard',
    href: '/pricing/enquire?tier=standard',
    price: { monthly: '£1' },
    description: 'For larger Practices/PCNs with more than 30 care home beds',
    features: [
      'As many beds as you need',
      '24-hour support response time',
      'Active development team, ready to listen to your needs',
      'Love it or your money back',
    ],
  },
]

export default function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center mx-auto sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-500 ">Pricing</h2>
          <div className="mt-2 text-xl font-bold text-gray-900 sm:text-5xl">
            <p className='leading-tight tracking-tight'>Start a free trial,</p>
            <p className='leading-tight tracking-tight'>make a difference,</p>
            <p className='leading-tight tracking-tight'>today.</p>
          </div>       
          <p className="mx-auto mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            <Balancer>This way you can discover MEDOWS&apos;s benefits and then decide which plan is right for you. </Balancer>
         </p>
        </div>

        <div className="flow-root mt-20">
          <div className="grid max-w-sm grid-cols-1 -mt-16 divide-y divide-gray-100 isolate gap-y-16 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 id={tier.id} className="text-base font-semibold leading-7 text-gray-900">
                  {tier.name}
                </h3>
                <p className="flex items-baseline mt-6 gap-x-1">
                    {
                        tier.price?.monthly && (
                            <>
                                <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">/month/bed</span>
                            </>
                        )
                    }
                </p>
                <Link
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="block px-3 py-2 mt-10 text-sm font-semibold leading-6 text-center text-white rounded-md shadow-sm bg-rose-600 hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                >
                  Buy plan
                </Link>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{tier.description}</p>
                <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon className="flex-none w-5 h-6 text-rose-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Pro
                </h3>
                
                <p 
                  className="mt-10 text-sm font-semibold leading-6 text-gray-600"
                >
                  Watch this space!
                </p>
                {/* <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{tier.description}</p>
                <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon className="flex-none w-5 h-6 text-rose-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul> */}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
