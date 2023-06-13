import Link from 'next/link'
export default function About() {

  return (
    <>

      <main>
        <div className="relative py-24 sm:py-32 lg:pb-40">
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto prose text-center prose-a:no-underline">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                What is Medows?
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Medows is a platform built for a new way of working that boosts efficiency and productivity for care homes and Clinicians.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Medows brings Care Homes and Clinicians together to drive impact for care home residents
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6">
                <Link
                  href="/enquire"
                  className="rounded-md bg-rose-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                >
                  Get started
                </Link>
                <Link href="/features" className="text-base font-semibold leading-7 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="flow-root mt-16 sm:mt-24">
              <div className="p-2 -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <div className="w-full rounded-md shadow-xl aspect-w-16 aspect-h-9 ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none">
                    <iframe src="https://www.youtube.com/embed/HHb_WZl4rdo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> 
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </>
  )
}