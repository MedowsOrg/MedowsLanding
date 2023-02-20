import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    QueueListIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon
  } from '@heroicons/react/24/outline'
import Image from 'next/image'
import FullList from '@/assets/FullList.png'
import AnimateOnScroll from '@/hooks/AnimateOnScroll'
import Request from "@/assets/Request.png"
  
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
        'At Medows, we believe that technology should make your life easier. Our intuitive design promotes care home staff to provide as much detail as necessary, while clinicians can easily set tasks and follow up. Every care has been taken to make sure Medows is as simple as possible, so you can focus on what matters most: your patients.',
      icon: BoltIcon,
    },
    {
      id: 3,
      name: 'One-Click import to Patient Records',
      description:
        "Medows is designed to make your life easier. That's why we've made it as simple as possible to import requests and tasks into your patient records. Just one click and you're done.",
      icon: CursorArrowRaysIcon,
    },
  ]
  const carerFeatures = [
    {
      id: 1,
      name: 'Help is at hand',
      description:
        'Medows makes it easy for care home staff to request help from clinicians. Just a few clicks and you can send a request to your GP, or any other clinician you work with.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      id: 2,
      name: 'Work on the go',
      description:
        'Available on mobile and tablet, Medows makes it easy to request help on the go. No more waiting until you get back to the office to send a request. Fire it off from the patients bed side, giving you the time you need to focus on your patients.',
      icon: DevicePhoneMobileIcon,
    },
  ]
  
  const FeaturesSection = () => {
    return (
      <div className="overflow-hidden  py-16 lg:py-24">
        <div className="relative mx-auto max-w-xl px-6 lg:max-w-screen-2xl lg:px-8">
          <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
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
            <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Medows is designed for you
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
              Here is just a few ways Medows can save you time, money and stress.
            </p>
          </div>
  
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative mr-6 prose">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">For Clinicians</h3>
              <p className="mt-3 text-lg text-gray-500">
                Medows is designed to make your life easier. We&apos;ve created, battle-tested and refined a myriad of features to take away any pain points care home support inherently has, letting you to get on with your work as easily as possible. Here are just a few of the features we&apos;ve built for you:
              </p>
  
              <dl className="mt-10 space-y-10">
                {clinicianFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white">
                        <item.icon className="h-8 w-8" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
  
            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
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
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
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
              <div className="lg:col-start-2 ml-6 prose">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">For Carers</h3>
                <p className="mt-3 text-lg text-gray-500">
                    Medows is much more than just a tool for your care home. We&apos;ve built a platform that is designed to make your job easier, and to help you do your job better. Here are just a few of the features we&apos;ve built for you:
                </p>
  
                <dl className="mt-10 space-y-10">
                  {carerFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white">
                          <item.icon className="h-8 w-8" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
  
              <div className="relative -mx-4 mt-10 lg:col-start-1 lg:mt-0">
                <svg
                  className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
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