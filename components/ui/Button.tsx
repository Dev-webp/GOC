import Link from 'next/link';
import clsx from 'clsx';
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, HTMLProps } from 'react';

// Define the props type
type ButtonProps = {
    invert?: boolean;
    href?: string;
    className?: string;
    children: ReactNode;
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

const Button = ({ invert, href, className, children, ...props }: ButtonProps) => {
    // Combine class names using clsx
    className = clsx(
        className,
        'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
        invert
            ? 'bg-white text-neutral-950 hover:bg-neutral-200'
            : 'bg-neutral-950 text-white hover:bg-neutral-800'
    );

    // Define the inner content
    let inner = <span>{children}</span>;

    // Render based on the presence of href
    if (href) {
        // Cast props to AnchorHTMLAttributes for Link
        const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

        return (
            <Link href={href} passHref>
                <a className={className} {...linkProps}>
                    {inner}
                </a>
            </Link>
        );
    }

    // Cast props to ButtonHTMLAttributes for button
    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button className={className} {...buttonProps}>
            {inner}
        </button>
    );
};

export default Button;
