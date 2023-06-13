
import Link from "next/link"

const EnquirySuccess = () => {

    return (
      <>
        <main className="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8 md:h-[calc(100vh_-_300px)]">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Thank you TODO Name</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Thanks for your enquiry, a member of our team will shortly be in touch!</p>
            <div className="flex items-center justify-center mt-10 gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Go back home
              </Link>

            </div>
          </div>
        </main>
      </>
    )
  }
  
export default EnquirySuccess
  