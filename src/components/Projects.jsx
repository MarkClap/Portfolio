import { motion } from "framer-motion";
import tcweekImg from "../assets/T&CWEEK.png";
import wowcImg from "../assets/World of Warclass.png";
import tecsupermarket from "../assets/tecsupermaker.png";
import tecsup360Img from "../assets/tecsup_360.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiTypescript, SiFastapi, SiTailwindcss, SiSpringboot, SiLaravel, SiPhp, SiMysql, SiPostgresql, SiAngular } from "react-icons/si";

const projects = [
    {
        title: "App Web 360 - Tecsup Centro",
        description:
            "Sistema integral para el campus Tecsup Centro que moderniza la interacción estudiantil.",
        problem: "Los estudiantes carecían de una plataforma centralizada para acceder a información del campus y asistencia inmediata.",
        technologies: [
            { name: "React", icon: <SiReact className="text-blue-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
            { name: "FastAPI", icon: <SiFastapi className="text-teal-400" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
        ],
        githubLink: "https://github.com/MarkClap/ExploraTec-Frontend",
        deployLink: "https://exploratec-frontend-1.onrender.com",
        image: tecsup360Img,
    },
    {
        title: "T&C Week",
        description:
            "Plataforma para la gestión y visualización de eventos de la semana técnica.",
        problem: "La organización de eventos técnicos sufría de baja visibilidad y dificultad en la inscripción de participantes.",
        technologies: [
            { name: "React", icon: <SiReact className="text-blue-400" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        ],
        githubLink: "https://github.com/MarkClap/C24_4_2024-2_G2C_FRONT_TCWEEKAPPLIMA",
        deployLink: "#",
        image: tcweekImg,
    },
    {
        title: "World of Warclass",
        description:
            "Aplicación de gamificación educativa inspirada en RPGs para mejorar el engagement.",
        problem: "Falta de motivación y participación activa de los estudiantes en las actividades de clase tradicionales.",
        technologies: [
            { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
            { name: "Blade", icon: <SiPhp className="text-indigo-400" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        ],
        githubLink: "https://github.com/MarkClap/WoWc-Platform-Mark",
        deployLink: "#",
        image: wowcImg,
    },
    {
        title: "TecSuperMarket",
        description: "Aplicación de gestión de supermercado.",
        problem: "Los usuarios no tenían una forma fácil de gestionar sus compras.",
        technologies: [
            { name: "Angular", icon: <SiAngular className="text-blue-400" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
        ],
        githubLink: "https://github.com/MarkClap/TecSuperMarket",
        deployLink: "#",
        image: tecsupermarket,
    }
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col h-full group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow text-left">
                                <h3 className="text-xl font-bold text-slate-100 mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                                    {p.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                                        Problema
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {p.problem}
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-slate-800">
                                    <div className="flex gap-3 mb-6 flex-wrap">
                                        {p.technologies.map((tech, idx) => (
                                            <div key={idx} className="bg-slate-800 p-2 rounded-lg text-lg" title={tech.name}>
                                                {tech.icon}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={p.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                        {p.deployLink && p.deployLink !== "#" && (
                                            <a
                                                href={p.deployLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                                            >
                                                <FaExternalLinkAlt /> Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
