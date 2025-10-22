import { useState, useEffect, useRef } from 'react';

export const useLazyLoad = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef<Element | null>(null);

    const observe = (element: Element | null, index: number) => {
        if (element) {
            ref.current = element;
        }
    };

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { observe, isIntersecting };
};