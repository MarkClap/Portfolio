import { useEffect } from "react";

export default function Navbar() {
    const links = [
        { name: "Inicio", href: "#hero" },
        { name: "Sobre mí", href: "#about" },
        { name: "Experiencia laboral", href: "#experience" },
        { name: "Proyectos", href: "#projects" },
        { name: "Tecnologías", href: "#technologies" },
        { name: "Contacto", href: "#contact" },
    ];

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const id = e.target.getAttribute("href").substring(1);
                const section = document.getElementById(id);
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-lg border-b border-slate-800 z-50 shadow-lg shadow-black/20">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-blue-400 tracking-wider hover:text-blue-300 transition-colors">
                    &lt;MarkDev /&gt;
                </h1>
                <ul className="flex space-x-8 text-slate-300 font-medium">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative hover:text-blue-400 transition-colors after:content-[''] after:block after:h-[2px] after:bg-blue-500 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:rounded-full"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
