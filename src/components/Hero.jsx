import { FaGithub, FaLinkedin, FaReact, FaLaravel, FaGitAlt, FaJava } from "react-icons/fa";
import { SiSpring, SiPostgresql } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-[#0f172a] text-slate-100 text-center px-4"
    >
      {/* Botón de descarga */}
      <a
        href="/CV Deivid Laura.pdf"
        download
        className="mb-6 inline-flex items-center gap-2 px-5 py-2 border border-slate-500 rounded-lg text-slate-300 hover:text-blue-400 hover:border-blue-400 transition-all"
      >
        <i className="fa-solid fa-file-arrow-down" />
        Descargar CV
      </a>

      {/* Título principal */}
      <h2 className="text-3xl md:text-5xl font-semibold text-yellow-300 tracking-wide mb-2">
        Software Developer
      </h2>
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-50 mb-3">
        Laura Deivid
      </h1>
      <p className="text-slate-400 text-lg mb-8">
        Full Stack React, Spring Boot & Laravel
      </p>

      {/* Botones */}
      <div className="flex gap-6 mb-10">
        <a
          href="https://www.linkedin.com/in/deivid-laura/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all shadow-lg shadow-blue-900/30"
        >
          Linkedin →
        </a>
        <a
          href="https://github.com/MarkClap"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all shadow-lg shadow-black/40"
        >
          Github →
        </a>
      </div>

      {/* Tecnologías */}
      <div className="flex gap-8 text-4xl text-slate-400">
        <SiSpring className="hover:text-green-400 transition-colors" title="Spring Boot" />
        <FaReact className="hover:text-sky-400 transition-colors" title="React" />
        <FaLaravel className="hover:text-red-500 transition-colors" title="Laravel" />
        <FaGitAlt className="hover:text-orange-400 transition-colors" title="Git" />
        <SiPostgresql className="hover:text-blue-400 transition-colors" title="PostgreSQL" />
        <FaJava className="hover:text-red-600 transition-colors" title="Java" />
      </div>
    </section>
  );
}
