interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className="block w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10">
            {children}
        </button>
    );
};

export default Button;