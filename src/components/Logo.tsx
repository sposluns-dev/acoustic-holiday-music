/** Spiral-arrow logo (same artwork as public/logo.svg), drawn in currentColor. */
export default function Logo({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="-20 -20 376 264" role="img" aria-label="The Kitchen Sink logo">
            <path
                d="M0 0 L0 224 L336 224 L336 0 L56 0 L56 168 L280 168 L280 56 L112 56 L112 112 L204 112"
                fill="none" stroke="currentColor" strokeWidth="16" strokeLinejoin="miter" strokeLinecap="butt"
            />
            <polygon points="196,88 232,112 196,136" fill="currentColor" />
        </svg>
    );
}
