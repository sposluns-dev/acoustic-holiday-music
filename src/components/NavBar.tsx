const links = [
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#music", label: "Music" },
    { href: "#contact", label: "Contact" },
];

export default function NavBar() {
    return (
        <nav className="nav" aria-label="Main">
            <ul>
                {links.map((l) => (
                    <li key={l.href}><a href={l.href}>{l.label}</a></li>
                ))}
            </ul>
        </nav>
    );
}
