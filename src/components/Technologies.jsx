import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiIntellijidea,
  SiVsco,
  SiNpm,
} from "react-icons/si";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Tecnologías
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          En mi camino como desarrollador, he trabajado con diversas herramientas y tecnologías
          tanto en el desarrollo frontend como backend, además de entornos que potencian mi flujo de trabajo.
        </p>

        {/* GRID PRINCIPAL */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* FRONTEND */}
          <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 transition">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Frontend</h3>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              <TechItem icon={<FaReact className="text-blue-400" size={40} />} label="React" />
              <TechItem icon={<SiTailwindcss className="text-cyan-400" size={40} />} label="Tailwind CSS" />
            </div>
          </div>

          {/* BACKEND */}
          <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-green-500/20 transition">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Backend</h3>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              <TechItem icon={<SiSpringboot className="text-green-400" size={40} />} label="Spring Boot" />
              <TechItem icon={<FaNodeJs className="text-green-500" size={40} />} label="Node.js" />
              <TechItem icon={<SiMysql className="text-blue-300" size={40} />} label="MySQL" />
              <TechItem icon={<SiPostgresql className="text-sky-400" size={40} />} label="PostgreSQL" />
              <TechItem icon={<FaPhp className="text-indigo-400" size={40} />} label="PHP" />
              <TechItem icon={<FaLaravel className="text-red-500" size={40} />} label="Laravel" />
              <TechItem icon={<FaJava className="text-orange-500" size={40} />} label="Java" />
            </div>
          </div>

          {/* HERRAMIENTAS */}
          <div className="bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-purple-500/20 transition">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">Herramientas</h3>
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              <TechItem icon={<SiIntellijidea className="text-purple-400" size={40} />} label="IntelliJ IDEA" />
              <TechItem icon={<FaGitAlt className="text-orange-400" size={40} />} label="Git" />
              <TechItem icon={<FaGithub className="text-gray-200" size={40} />} label="GitHub" />
              <TechItem icon={<FaTerminal className="text-gray-400" size={40} />} label="Terminal" />
              <TechItem icon={<SiNpm className="text-red-500" size={40} />} label="npm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de ítem individual
const TechItem = ({ icon, label }) => (
  <div className="flex flex-col items-center group">
    <div className="transition transform group-hover:scale-110 group-hover:-translate-y-1">
      {icon}
    </div>
    <p className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
      {label}
    </p>
  </div>
);

export default Technologies;
