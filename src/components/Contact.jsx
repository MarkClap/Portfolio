import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-8 text-slate-100"
        >
          Contacto
        </motion.h2>
        <p className="text-slate-400 mb-8">
          Puedes contactarme por correo o redes sociales.
        </p>
        <div className="flex justify-center space-x-8 text-3xl">
          <a href="https://github.com/MarkClap" target="_blank" className="text-slate-400 hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/deivid-laura/" target="_blank" className="text-slate-400 hover:text-blue-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
