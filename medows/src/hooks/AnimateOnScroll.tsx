import { useEffect, useRef, useState } from 'react';

type Props = {
    children: React.ReactNode;
    threshold?: number;
    reset?: boolean;
    right?: boolean;
}

type Options = {
    threshold: number;
    reappear?: boolean;
    right?: boolean;
}

const useOnScreen = (options: Options): [React.RefObject<HTMLDivElement>, boolean] => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const makeAppear = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsVisible(true);
        }
    };

    const makeAppearRepeating = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const callBack = options.reappear ? makeAppearRepeating : makeAppear;

    useEffect(() => {
        const containerRefCurrent = containerRef.current;
        const observer = new IntersectionObserver(callBack, options);
        if (containerRefCurrent) {
            observer.observe(containerRefCurrent);
        }

        return () => {
            if (containerRefCurrent) {
                observer.unobserve(containerRefCurrent);
            }
        }
    }, [containerRef, options, callBack]);

    return [containerRef, isVisible];
};

const AnimateOnScroll = ({ children, threshold = 0.5, reset = false, right = false }: Props) => {
    const [containerRef, isVisible] = useOnScreen({ threshold, reappear: reset });

    return (
        <div ref={containerRef} className={`transition duration-1000 ${isVisible ? "opacity-100 blur-none translate-x-0" : (right ? "opacity-0 blur-lg translate-x-20" : "opacity-0 blur-lg -translate-x-20")}  motion-reduce:transition-none motion-reduce:hover:transform-none`}>
            {children}
        </div>
    );

};

export default AnimateOnScroll;