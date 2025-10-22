import { useState, useEffect, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Particles } from './components/Particles';

const SectionLoader = () => (
    <div className="section-loader">
        <div className="loader-spinner"></div>
        <p>Loading content...</p>
    </div>
);

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleError = () => {
            setHasError(true);
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    if (hasError) {
        return (
            <div className="error-fallback">
                <h2>Something went wrong</h2>
                <button onClick={() => window.location.reload()}>
                    Reload Page
                </button>
            </div>
        );
    }

    return <>{children}</>;
};

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleSmoothScroll = (e: Event) => {
            e.preventDefault();
            const target = e.target as HTMLAnchorElement;
            const href = target.getAttribute('href');

            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        return () => {
            anchorLinks.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    if (isLoading) {
        return (
            <div className="app-loading">
                <div className="loading-content">
                    <div className="loading-spinner"></div>
                    <h2>Ahmed Elbalal</h2>
                    <p>Full Stack Developer</p>
                </div>
            </div>
        );
    }

    return (
        <ErrorBoundary>
            <div className="App">
                <Particles />
                <Header />
                <main>
                    <section id="home">
                        <Hero />
                    </section>

                    <section id="about">
                        <About />
                    </section>

                    <section id="experience">
                        <Experience />
                    </section>

                    <section id="projects">
                        <Projects />
                    </section>

                    <section id="skills">
                        <Skills />
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>
                </main>

                <Footer />
            </div>
        </ErrorBoundary>
    );
}

export default App;