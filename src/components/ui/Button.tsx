import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'secondary';
    icon?: LucideIcon;
    href?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    disabled?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    icon: Icon,
    href,
    onClick,
    type = 'button',
    disabled = false,
    className = ''
}) => {
    const baseClasses = 'btn';
    const variantClasses = {
        primary: '',
        outline: 'btn-outline',
        secondary: 'btn-secondary'
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                onClick={onClick}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
                {Icon && <Icon size={18} />}
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && <Icon size={18} />}
            {children}
        </button>
    );
};