import { motion } from "framer-motion";

const experiences = [
    {
        company: "TECSUP",
        role: "Desarrollador de Software",
        period: "Enero - Junio 2025",
        location: "Lima, Perú",
        responsibilities: [
            "Desarrollé componentes backend en Java y Spring Boot, construyendo APIs REST para integrar un sistema generador de presentaciones automáticas.",
            "Integré una API de IA mediante servicios REST y procesé respuestas estructuradas en JSON.",
            "Utilicé Git para control de versiones y trabajo colaborativo.",
            "Participé en el diseño y optimización de la solución utilizando Spring Boot, Node.js y React, enfocándome en la comunicación backend-frontend.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-slate-950 text-slate-100">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center text-slate-100"
                >
                    Experiencia <span className="text-blue-500">Profesional</span>
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative border-l-4 border-blue-500 pl-8 ml-4"
                        >
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-950"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                    <p className="text-lg text-blue-400 font-medium">{exp.role}</p>
                                </div>
                                <div className="text-slate-400 text-sm mt-2 sm:mt-0 text-right">
                                    <p>{exp.period}</p>
                                    <p>{exp.location}</p>
                                </div>
                            </div>

                            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-300 leading-relaxed">
                                {exp.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
