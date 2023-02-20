
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";

const LoginButton = () => {

    return (
        // <div className="text-lg text-white hover:bg-rose-600 bg-rose-500 flex flex-row h-min w-min rounded-md p-4 border-gray-300 shadow-sm border">
        <a href="https://portal.medo.ws/#/" className="py-6 md:py-0 inline-flex items-center border-b-2 border-transparent rounded-sm font-bold w-full md:w-min h-full text-sm text-white bg-rose-500 md:bg-white md:text-lg md:text-gray-700 hover:bg-rose-500 px-4 hover:text-white">
            Login

            <ArrowRightOnRectangleIcon className="w-5 ml-2" aria-hidden="true" />
        </a>
    )
};

export default LoginButton;