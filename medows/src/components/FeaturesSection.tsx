import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    QueueListIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    ClockIcon
  } from '@heroicons/react/24/outline'
import Image from 'next/image'
import FullList from '@/assets/FullList.png'
import AnimateOnScroll from '@/hooks/AnimateOnScroll'
import Request from "@/assets/Request.png"
import { Balancer } from 'react-wrap-balancer'
  
  const clinicianFeatures = [
    {
      id: 1,
      name: 'All your patients in one place',
      description:
        'Medows makes care homes simple, by bringing all your patients into one place. No more searching through emails, notes or asking colleagues to find the information you need.',
      icon: QueueListIcon,
    },
    {
      id: 2,
      name: 'Speed up your workflow',
      description:
        'At Medows, we believe that technology should make your life easier. Our intuitive design promotes care home staff to provide as much detail as necessary, while clinicians can easily dictate notes straight to text, set tasks and follow up.  Make confident decisions, so you can focus on what matters most.',
      icon: BoltIcon,
    },
    {
      id: 3,
      name: 'Seamless import to Patient Records',
      description: "Medows was built and tested by clinicians and GPs. That's why we've made it as simple as possible to transfer information into your patient records.",
      icon: CursorArrowRaysIcon,
    },
  ]
  const carerFeatures = [
    {
      id: 1,
      name: 'Help is at hand',
      description: 'Medows makes it easy for care home staff to request help from clinicians. Just a few clicks and you can send a request to the GP.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      id: 2,
      name: 'Work on the go',
      description:
        'Available on mobile and tablet, Medows makes it easy to request help on the go, giving you the time you need to focus on your residents.',
      icon: DevicePhoneMobileIcon,
    },
    {
      id: 3,
      name: 'When it matters',
      description: 'Have instant access to important documents and management plans from the GP so you can ensure your residents get the best care, with no delays.',
      icon: ClockIcon,
    }
  ]
  
  const FeaturesSection = () => {
    return (
      <div className="py-16 overflow-hidden lg:py-24">
        <div className="relative max-w-xl px-6 mx-auto lg:max-w-screen-2xl lg:px-8">
          <svg
            className="absolute hidden transform -translate-x-1/2 left-full -translate-y-1/4 lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>
  
          <div className="relative">
            <h2 className="text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
                Medows is designed for you
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">
              Here is just a few ways Medows can save you time, money and stress.
            </p>
          </div>
  
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative mr-6">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">For Clinicians</h3>
              <p className="mt-3 mb-10 text-lg leading-8 text-gray-500">
              Medows is designed to make your life easier. We&apos;ve created, battle-tested and refined a myriad of features to take away any inefficiencies care home support has, letting you to get on with your work as easily as possible. Here are just a few of the features we think you&apos;ll like:
              </p>
  
              <dl className="mt-10 space-y-10">
                {clinicianFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-xl bg-rose-500">
                        <item.icon className="w-8 h-8" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900"><Balancer>{item.name}</Balancer></p>
                    </dt>
                    <dd className="ml-16 text-base leading-8 text-gray-500"><Balancer>{item.description}</Balancer></dd>
                  </div>
                ))}
              </dl>
            </div>
  
            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
              </svg>
              <AnimateOnScroll right reset>
                <Image
                    className="relative mx-auto shadow-lg rounded-xl shadow-gray-400"
                    width={990}
                    src={FullList}
                    alt=""
                />
              </AnimateOnScroll>
            </div>
          </div>
  
          <svg
            className="absolute hidden transform translate-x-1/2 translate-y-12 right-full lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
  
          <div className="relative mt-12 sm:mt-16 lg:mt-64">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
              <div className="ml-6 lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">For Carers</h3>
                <p className="mt-3 text-lg text-gray-500">
                Medows is much more than just a tool for your care home. We&apos;ve built a platform that is designed to make your job easier, and to empower you. Here are just a few of the benefits for you:
                </p>
  
                <dl className="mt-10 space-y-10">
                  {carerFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center w-12 h-12 text-white rounded-xl bg-rose-500">
                          <item.icon className="w-8 h-8" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900"><Balancer>{item.name}</Balancer></p>
                        <p className="ml-16 text-base leading-8 text-gray-500 "><Balancer>{item.description}</Balancer></p>
                      </dt>
                      
                    </div>
                  ))}
                </dl>
              </div>
  
              <div className="relative mt-10 -mx-4 lg:col-start-1 lg:mt-0">
                <svg
                  className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
                </svg>
                <AnimateOnScroll reset>
                    <Image
                    className="relative mx-auto shadow-lg rounded-xl shadow-gray-400"
                    width={990}
                    src={Request}
                    alt=""
                    />
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default FeaturesSection