import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-950 text-center">
            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-6 text-slate-100"
                >
                    Sobre mí
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-slate-400 leading-relaxed max-w-3xl mx-auto text-lg"
                >
                    👋 Hola, soy <span className="text-blue-400 font-semibold">Deivid</span>, un{" "} <span className="text-green-400 font-semibold">Full Stack Developer</span> con alta adaptabilidad y capacidad de aprendizaje rápido.
                    Me especializo en construir soluciones web escalables y eficientes, combinando una sólida lógica técnica con una visión orientada a la experiencia de usuario.
                </motion.p>
            </div>
        </section>
    );
}
