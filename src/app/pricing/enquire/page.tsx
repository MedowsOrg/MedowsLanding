import PricingForm from "@/components/PricingForm";

export default function Enquire({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const tier = searchParams?.tier as string;

    return (
        <div>
            <div className="px-6 py-16 overflow-hidden lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg
                        className="absolute transform translate-x-1/2 left-full"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true">
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse">
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={404}
                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                        />
                    </svg>
                    <svg
                        className="absolute bottom-0 transform -translate-x-1/2 right-full"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true">
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse">
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={404}
                            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
                        />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Contact our sales team
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Boost your productivity from day one with Medows
                        </p>
                    </div>
                    <PricingForm tier={tier} />
                </div>
            </div>
        </div>
    );
}
