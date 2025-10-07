import { motion } from "framer-motion";
import tcweekImg from "../assets/T&CWEEK.png";
import wowcImg from "../assets/World of Warclass.png";

const projects = [
    {
        title: "T&C Week",
        description:
            "Sitio web creado con React y Tailwind CSS, respaldado por un backend sólido en Spring Boot.",
        link: "https://github.com/MarkClap/C24_4_2024-2_G2C_FRONT_TCWEEKAPPLIMA",
        image: tcweekImg,
    },
    {
        title: "World of Warclass",
        description:
            "Aplicación full-stack desarrollada con Laravel y Blade, enfocada en gestión y experiencia de usuario.",
        link: "https://github.com/MarkClap/WoWc-Platform-Mark",
        image: wowcImg,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-950 text-center">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-slate-100"
                >
                    Proyectos
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-slate-800/50 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition-all"
                        >
                            <img
                                src={p.image}
                                alt={p.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-slate-100 mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                    {p.description}
                                </p>
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 font-medium"
                                >
                                    Ver proyecto →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
