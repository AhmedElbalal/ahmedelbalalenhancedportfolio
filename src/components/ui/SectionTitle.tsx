import React from 'react';

interface SectionTitleProps {
    children: string;
    className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    children,
    className = ''
}) => {
    return (
        <h2 className={`section-title ${className}`}>
            {children}
        </h2>
    );
};