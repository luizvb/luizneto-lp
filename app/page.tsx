"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skills = [
    { name: "Node.js/TypeScript", category: "backend", level: 90 },
    { name: "Python", category: "backend", level: 90 },
    { name: "Docker", category: "devops", level: 90 },
    { name: "CI/CD", category: "devops", level: 90 },
    { name: "AWS", category: "cloud", level: 80 },
    { name: "React.js", category: "frontend", level: 75 },
    { name: "PostgreSQL", category: "database", level: 75 },
    { name: "MongoDB", category: "database", level: 75 },
  ];

  const experiences = [
    {
      title: "Partner & CTO",
      company: "Yio Talktech",
      period: "Jul 2022 - Presente",
      description:
        "Responsável pela criação de documentos de requisitos, supervisão do desenvolvimento, seleção de tecnologias e montagem de equipe. Yio é um canal de comunicação inovador que combina Websites, Chatbots e Landing Pages em uma única solução.",
    },

    {
      title: "Head of Software Engineering",
      company: "MZ Group",
      period: "Maio 2022 - Presente",
      description:
        "Liderança de uma equipe com +35 desenvolvedores, colaborando com o CTO para garantir a eficácia operacional dos projetos. Responsabilidades incluem recrutamento, treinamento, sessões 1:1 com Tech Managers, planejamento e gerenciamento de projetos e produtos.",
    },
    {
      title: "Engineering Manager",
      company: "MZ Group",
      period: "Jul 2021 - Maio 2022",
      description:
        "Liderança de uma equipe com +35 desenvolvedores, colaborando com o CTO para garantir a eficácia operacional dos projetos. Responsabilidades incluem recrutamento, treinamento, sessões 1:1 com Tech Managers, planejamento e gerenciamento de projetos e produtos.",
    },
    {
      title: "Tech Lead",
      company: "MZ Group",
      period: "Abr 2020 - Jul 2021",
      description:
        "Liderança de uma equipe com +35 desenvolvedores, colaborando com o CTO para garantir a eficácia operacional dos projetos. Responsabilidades incluem recrutamento, treinamento, sessões 1:1 com Tech Managers, planejamento e gerenciamento de projetos e produtos.",
    },
    {
      title: "Senior Software Engineer",
      company: "MZ Group",
      period: "Nov 2019 - Abr 2020",
      description:
        "Liderança de uma equipe com +35 desenvolvedores, colaborando com o CTO para garantir a eficácia operacional dos projetos. Responsabilidades incluem recrutamento, treinamento, sessões 1:1 com Tech Managers, planejamento e gerenciamento de projetos e produtos.",
    },
    {
      title: "Coordenador/Product Manager",
      company: "CMV Solutions",
      period: "Mai 2018 - Nov 2019",
      description:
        "Trabalho conjunto com o Head de Desenvolvimento, liderando Tech Managers e responsável pela padronização do ambiente técnico, abrangendo desenvolvimento e DevOps.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20 z-0" />
        </div>

        <div className="container mx-auto px-4 z-20 py-20">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
          >
            <motion.div
              variants={fadeIn}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500/30"
            >
              <Image
                src="https://media.licdn.com/dms/image/v2/D4D03AQF7MLTYNxJwIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727620873059?e=1747872000&v=beta&t=eUqYhtUg-u0PwZk4H8EEn1qrheLTC0C0xNpcv38v5IM"
                alt="Luiz Neto"
                width={300}
                height={300}
                className="object-cover"
              />
            </motion.div>

            <div className="text-center md:text-left">
              <motion.div variants={fadeIn} className="mb-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-2">
                  Head of Software Engineering
                </span>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              >
                Luiz Neto
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-6"
              >
                Gestor de tecnologia com mais de 12 anos de experiência em TI,
                liderando equipes e desenvolvendo soluções inovadoras.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
              >
                <Badge className="bg-blue-600 hover:bg-blue-700">Node.js</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">AWS</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">
                  Liderança
                </Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">
                  Microserviços
                </Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">DevOps</Badge>
                <Badge className="bg-blue-600 hover:bg-blue-700">
                  Metodologias Ágeis
                </Badge>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex flex-wrap justify-center gap-6 bg-white/10 backdrop-blur-md rounded-full py-3 px-6">
              <a
                href="mailto:luiz@lvtec.com.br"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5 text-blue-400" />
                <span>luiz@lvtec.com.br</span>
              </a>
              <a
                href="https://linkedin.com/in/luizbeserra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />
                <span>linkedin.com/in/luizbeserra</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Education & Certifications */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Sobre Mim
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="h-1 w-20 bg-blue-500 mx-auto mb-8"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left Column - About Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="bg-slate-800/50 rounded-2xl p-8 h-full backdrop-blur-sm border border-slate-700"
              >
                <p className="text-gray-300 mb-6 text-lg">
                  Tenho um pouco mais de 12 anos de experiência em tecnologia.
                  Desde suporte, monitoramento, desenvolvimento e implantação de
                  produtos escaláveis.
                </p>
                <p className="text-gray-300 mb-6 text-lg">
                  Atualmente, sou Head de Engenharia na MZ, liderando uma equipe
                  de +35 desenvolvedores e responsável por arquitetar e evoluir
                  produtos que transformam a comunicação corporativa e o mercado
                  de relações com investidores.
                </p>
                <p className="text-gray-300 text-lg">
                  Além disso, sou sócio e CTO da Yio Talktech, uma startup que
                  oferece um canal de comunicação inovador, que combina o melhor
                  dos websites, chatbots e landing pages. Nesse projeto, fui
                  responsável por definir a visão tecnológica, selecionar as
                  tecnologias, montar a equipe e gerenciar o desenvolvimento do
                  MVP e das melhorias contínuas.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Education & Certifications */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.div
                variants={fadeIn}
                className="bg-slate-800/80 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-blue-500/20 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Educação</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-xl">
                      Análise e Desenvolvimento de Sistemas
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden  p-1">
                        <Image
                          src="https://media.licdn.com/dms/image/v2/C4D0BAQFGUHRJ26bFDw/company-logo_100_100/company-logo_100_100/0/1631312349936?e=1747872000&v=beta&t=5IQW_nf4Y1tK0LftvqnLmDaD0eRpzqh0o_4aSdo6K88"
                          alt="FIAP Logo"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-blue-400">FIAP</p>
                    </div>
                    <p className="text-gray-400">2020 - 2022</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-slate-800/80 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-blue-500/20 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Certificações</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-xl">ITIL Foundation</h4>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-16 rounded overflow-hidden  p-1">
                        <Image
                          src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_699/http://www.funkykit.com/wp-content/uploads/2018/07/EXIN-ITIL-V3-b-1024x699.jpg"
                          alt="EXIN Logo"
                          width={60}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-blue-400">EXIN</p>
                    </div>
                    <p className="text-gray-400">2016</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl">
                      ICS - Impacta Certified Specialist
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full overflow-hidden p-1">
                        <Image
                          src="https://media.licdn.com/dms/image/v2/C4D0BAQEG8qandFQNjw/company-logo_100_100/company-logo_100_100/0/1630550349648/impacta_tecnologia_logo?e=1747872000&v=beta&t=tmZtacuRcX3NXZP7pWPDcmwBbdYxoeafQrtXpFfBg-c"
                          alt="Impacta Logo"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                      <p className="text-blue-400">Impacta</p>
                    </div>
                    <p className="text-gray-400">2017</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Experiência Profissional
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="h-1 w-20 bg-blue-500 mx-auto mb-8"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <div className="relative border-l-2 border-blue-500 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="mb-12 relative"
                >
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[2.55rem] top-1.5 z-10" />
                  <div className="absolute w-8 h-8 bg-blue-500/20 rounded-full -left-[3.15rem] top-0 animate-pulse" />

                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="h-4 w-4 text-blue-400" />
                    <span className="text-blue-400">{exp.company}</span>
                    <span className="text-gray-400">• {exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          ></motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Habilidades Técnicas
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="h-1 w-20 bg-blue-500 mx-auto mb-8"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="database">Banco de Dados</TabsTrigger>
                <TabsTrigger value="cloud">Cloud</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>

              {[
                "all",
                "backend",
                "frontend",
                "database",
                "cloud",
                "devops",
                "methodology",
              ].map((category) => (
                <TabsContent key={category} value={category} className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills
                      .filter(
                        (skill) =>
                          category === "all" || skill.category === category
                      )
                      .map((skill, index) => (
                        <motion.div
                          key={index}
                          variants={fadeIn}
                          className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                        >
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-blue-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2.5">
                            <motion.div
                              className="bg-blue-600 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Vamos Conversar?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-200 max-w-3xl mx-auto mb-8"
            >
              Estou sempre aberto a novas oportunidades, parcerias e projetos
              interessantes.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                <Mail className="mr-2 h-5 w-5" />
                luiz@lvtec.com.br
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white/10"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/luizneto/", "_blank")
                }
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white hover:bg-white/10"
                onClick={() =>
                  window.open("https://github.com/luizvb", "_blank")
                }
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Luiz Neto. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
