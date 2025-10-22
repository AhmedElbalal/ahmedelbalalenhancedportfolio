import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    width,
    height
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const observerRef = useRef<IntersectionObserver>();

    useEffect(() => {
        if (!imgRef.current) return;

        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observerRef.current?.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        observerRef.current.observe(imgRef.current);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={isInView ? src : ''}
            alt={alt}
            className={`lazy-image ${className} ${isLoaded ? 'loaded' : 'loading'}`}
            width={width}
            height={height}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            style={{
                transition: 'opacity 0.3s ease',
                opacity: isLoaded ? 1 : 0
            }}
        />
    );
};