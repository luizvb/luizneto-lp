"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  Download,
  GraduationCap,
  Layers,
  Layout,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";

export default function Cronograma() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePhase, setActivePhase] = useState(1);

  // Simulating current progress - in a real app, this would come from your backend
  const currentMonth = 0; // Project hasn't started yet
  const totalMonths = 12;
  const progressPercentage = (currentMonth / totalMonths) * 100;

  // Update the start date calculation
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 10); // Start date is 10 days from now
  const currentDate = new Date();
  const daysUntilStart = Math.ceil(
    (startDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Format dates for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  const startDateFormatted = formatDate(startDate);
  const endDate = new Date(startDate);
  endDate.setFullYear(endDate.getFullYear() + 1);
  const endDateFormatted = formatDate(endDate);

  // Add team members data with direct icon components
  const teamMembers = [
    {
      name: "Caian",
      role: "Arquiteto",
      description:
        "Responsável pela arquitetura do sistema, definição de padrões e revisão técnica.",
      color: "blue",
      icon: <Code className="h-8 w-8 text-blue-400" />,
      photoUrl:
        "https://media.licdn.com/dms/image/v2/D4E03AQGA2OlZF-6wMg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696911174647?e=1747872000&v=beta&t=HKXHvIivYfMGWYl0QGKMz5uC5jAa-cwpMjUwpp2OSlE",
    },
    {
      name: "Estevão",
      role: "Fullstack Pleno",
      description:
        "Desenvolvimento de funcionalidades complexas e mentoria de desenvolvedores júnior.",
      color: "purple",
      icon: <Layers className="h-8 w-8 text-purple-400" />,
      photoUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQFFSM46Qi_s7w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722550877080?e=1747872000&v=beta&t=hrPampzQui0ZF-tM3mQiGBkOVN75oge3qkGfhvHIoHM",
    },
    {
      name: "Lucas Lemes",
      role: "Fullstack JR",
      description: "Desenvolvimento de interfaces e funcionalidades",
      color: "green",
      icon: <Layout className="h-8 w-8 text-green-400" />,
      photoUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQEiVKhh79wGDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692370983114?e=1747872000&v=beta&t=OZ6z_Sv6dyFRa5cG9NThyM0NPwtEBzzfrnI9AKy1yRw",
    },
    {
      name: "André",
      role: "Estagiário",
      description: "Suporte técnico e QA",
      color: "amber",
      icon: <GraduationCap className="h-8 w-8 text-amber-400" />,
      photoUrl:
        "https://media.licdn.com/dms/image/v2/D4E35AQEXDGw5vA9vSQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1704996056546?e=1743112800&v=beta&t=TcHE34k2okmAVfqqWeokMTa_WNCExCW1wzYSHS43k90",
    },
  ];

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

  const phases = [
    {
      id: 1,
      title: "Módulo de Cadastro",
      months: "Mês 1-2",
      subtitle: "Construindo a Base do Sistema",
      description:
        "Desenvolvimento da estrutura fundamental do sistema com foco em cadastros e importação de dados.",
      features: [
        "Desenvolvimento do módulo de cadastro com busca inteligente",
        "Sistema robusto de importação de dados em lote",
        "Validação avançada para prevenir duplicações de itens",
        "Interface intuitiva para gerenciamento de produtos",
        "Implementação de filtros e categorização eficiente",
        "Sistema de backup automático da base de dados",
      ],
      status: "upcoming",
      color: "blue",
    },
    {
      id: 2,
      title: "Módulo de Bebidas",
      months: "Mês 3-4",
      subtitle: "Desenvolvimento Principal",
      description:
        "Substituição do Barmetrix com funcionalidades avançadas de controle de bebidas.",
      features: [
        "Cadastro completo de bebidas e receitas padrão",
        "Sistema de cálculo de consumo esperado vs real",
        "Monitoramento e alertas de desperdício automáticos",
        "Relatórios detalhados de consumo e desperdício",
        "Interface intuitiva para gestão de bebidas",
        "Sistema de alertas para variações significativas",
      ],
      status: "upcoming",
      color: "purple",
    },
    {
      id: 3,
      title: "Integrações e Otimizações",
      months: "Mês 5-6",
      subtitle: "Integração com Sistemas",
      description:
        "Desenvolvimento de APIs e sistemas de controle de estoque avançados.",
      features: [
        "APIs robustas para comunicação entre sistemas",
        "Sistema avançado de comparação de estoque",
        "Alertas automáticos para divergências",
        "Monitoramento em tempo real do inventário",
        "Registro detalhado de todas alterações manuais",
        "Sistema de aprovação para ajustes",
      ],
      status: "upcoming",
      color: "green",
    },
    {
      id: 4,
      title: "Expansão do Sistema",
      months: "Mês 7-8",
      subtitle: "Novos Módulos e Integrações",
      description:
        "Ampliação das funcionalidades com foco em proteínas e integrações com ERPs.",
      features: [
        "Desenvolvimento do módulo de controle de proteínas",
        "Integração com Everest ERP",
        "Integração com sistema Protheus",
        "Integração com Zigpay e Colibri",
        "Testes e ajustes das integrações em ambiente real",
      ],
      status: "upcoming",
      color: "amber",
    },
    {
      id: 5,
      title: "Visualização de Dados",
      months: "Mês 9-10",
      subtitle: "Dashboard em Tempo Real",
      description:
        "Implementação de dashboards avançados e relatórios personalizáveis.",
      features: [
        "Dashboards interativos com métricas em tempo real",
        "Sistema de relatórios personalizáveis",
        "Visualizações gráficas avançadas",
        "Exportação de dados em múltiplos formatos",
        "Alertas baseados em métricas configuráveis",
      ],
      status: "upcoming",
      color: "indigo",
    },
    {
      id: 6,
      title: "Preparação Comercial",
      months: "Mês 11-12",
      subtitle: "Modelo de Negócio",
      description:
        "Finalização do produto e preparação para lançamento comercial.",
      features: [
        "Implementação da estrutura SaaS completa",
        "Definição de planos e preços",
        "Sistema de cobrança automatizado",
        "Desenvolvimento de landing page atrativa",
        "Configuração de servidores escaláveis",
        "Sistema de onboarding automatizado",
      ],
      status: "upcoming",
      color: "rose",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-600">Concluído</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-600">Em Andamento</Badge>;
      case "upcoming":
        return <Badge className="bg-slate-600">Próxima Fase</Badge>;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "upcoming":
        return "bg-slate-500";
      default:
        return "bg-slate-500";
    }
  };

  // Helper function to get color classes based on color name
  const getColorClasses = (colorName: string, type: string) => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        bg: "bg-blue-900/30",
        border: "border-blue-500/50",
        text: "text-blue-400",
        badge: "bg-blue-600",
      },
      purple: {
        bg: "bg-purple-900/30",
        border: "border-purple-500/50",
        text: "text-purple-400",
        badge: "bg-purple-600",
      },
      green: {
        bg: "bg-green-900/30",
        border: "border-green-500/50",
        text: "text-green-400",
        badge: "bg-green-600",
      },
      amber: {
        bg: "bg-amber-900/30",
        border: "border-amber-500/50",
        text: "text-amber-400",
        badge: "bg-amber-600",
      },
      indigo: {
        bg: "bg-indigo-900/30",
        border: "border-indigo-500/50",
        text: "text-indigo-400",
        badge: "bg-indigo-600",
      },
      rose: {
        bg: "bg-rose-900/30",
        border: "border-rose-500/50",
        text: "text-rose-400",
        badge: "bg-rose-600",
      },
    };

    return colorMap[colorName]?.[type] || "";
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost" className="hover:bg-slate-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-400" />
            <span className="font-medium">{formatDate(currentDate)}</span>
            <Badge className="ml-2 bg-amber-600">Fase de Planejamento</Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Cronograma de Desenvolvimento
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              O projeto será desenvolvido ao longo de 12 meses, com início
              previsto para{" "}
              <span className="text-blue-400 font-medium">
                {startDateFormatted}
              </span>
              . Dividido em algumas fases, começará com o módulo de cadastro,
              seguido pelo módulo de bebidas, expansão de integrações,
              desenvolvimento do módulo de proteínas, implementação de
              dashboards e analyics, e finalizando com o lançamento comercial do
              sistema.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center gap-3 max-w-2xl mx-auto mb-8"
            >
              <div className="flex justify-between w-full text-sm">
                <span>Progresso Atual</span>
                <span className="font-medium">
                  {currentMonth} de {totalMonths} meses
                </span>
              </div>
              <Progress value={progressPercentage} className="h-3 w-full" />
              <div className="flex justify-between w-full text-xs text-gray-400">
                <span>Início: {startDateFormatted}</span>
                <span>Lançamento: {endDateFormatted}</span>
              </div>
            </motion.div>

            {/* Add countdown to start date */}
            <motion.div
              variants={fadeIn}
              className="bg-blue-900/30 rounded-lg p-4 max-w-md mx-auto mb-8"
            >
              <div className="text-center">
                <span className="text-blue-300">
                  Início do desenvolvimento em
                </span>
                <div className="text-3xl font-bold text-white mt-1">
                  {daysUntilStart} dias
                </div>
                <span className="text-blue-300 text-sm">
                  {startDateFormatted}
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <Badge className="bg-blue-600 text-white">
                Sistema de Auditoria da Invye
              </Badge>
              <Badge className="bg-purple-600 text-white">12 Meses</Badge>
              <Badge className="bg-amber-600 text-white">
                Fase de Planejamento
              </Badge>
              <Badge className="bg-green-600 text-white">
                Lançamento em 2026
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold mb-8 text-center"
            >
              Linha do Tempo
            </motion.h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-700"></div>

              {/* Timeline Nodes */}
              <div className="grid grid-cols-1 gap-8">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.id}
                    variants={fadeIn}
                    className={`relative ${
                      index % 2 === 0
                        ? "md:ml-auto md:mr-[50%]"
                        : "md:mr-auto md:ml-[50%]"
                    } md:w-[45%] mb-16`}
                  >
                    {/* Timeline Node */}
                    <div
                      className={`absolute top-0 left-1/2 md:left-auto ${
                        index % 2 === 0
                          ? "md:right-0 md:translate-x-1/2"
                          : "md:left-0 md:-translate-x-1/2"
                      } -translate-x-1/2 md:translate-y-6 w-6 h-6 rounded-full z-10 ${getStatusColor(
                        phase.status
                      )} flex items-center justify-center`}
                    >
                      {phase.status === "completed" && (
                        <CheckCircle className="h-4 w-4 text-white" />
                      )}
                      {phase.status === "in-progress" && (
                        <Clock className="h-4 w-4 text-white animate-pulse" />
                      )}
                      {phase.status === "upcoming" && (
                        <Clock className="h-4 w-4 text-white" />
                      )}
                    </div>

                    {/* Timeline Connector */}
                    <div
                      className={`absolute top-0 left-1/2 md:left-auto ${
                        index % 2 === 0 ? "md:right-0" : "md:left-0"
                      } -translate-x-1/2 md:translate-x-0 w-8 h-1 ${getStatusColor(
                        phase.status
                      )}`}
                    ></div>

                    {/* Content Card */}
                    <Card
                      className={`bg-slate-900 border-slate-700 p-6 mt-10 hover:border-${phase.color}-500/50 transition-colors duration-300 cursor-pointer`}
                      onClick={() => setActivePhase(phase.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">
                            {phase.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {phase.months}
                          </p>
                        </div>
                        {getStatusBadge(phase.status)}
                      </div>
                      <p className="text-gray-300 mb-4">{phase.subtitle}</p>
                      <p className="text-gray-400 text-sm">
                        {phase.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phase Details Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Detalhes da Fase
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="h-1 w-20 bg-blue-500 mx-auto mb-8"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activePhase === phase.id ? 1 : 0.5,
                  scale: activePhase === phase.id ? 1 : 0.95,
                  y: activePhase === phase.id ? 0 : 10,
                }}
                transition={{ duration: 0.4 }}
                className={`cursor-pointer ${
                  activePhase === phase.id ? "z-10" : "z-0"
                }`}
                onClick={() => setActivePhase(phase.id)}
              >
                <Card
                  className={`bg-slate-800 border-slate-700 p-6 h-full ${
                    activePhase === phase.id
                      ? getColorClasses(phase.color, "border") +
                        " shadow-lg shadow-" +
                        phase.color +
                        "-500/10"
                      : "hover:border-slate-600"
                  } transition-all duration-300`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={getColorClasses(phase.color, "badge")}>
                      {phase.months}
                    </Badge>
                    {getStatusBadge(phase.status)}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className={getColorClasses(phase.color, "text") + " mb-4"}>
                    {phase.subtitle}
                  </p>
                  <ul className="space-y-3 text-left">
                    {phase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div
                          className={`mt-1 w-2 h-2 rounded-full ${getColorClasses(
                            phase.color,
                            "badge"
                          )} flex-shrink-0`}
                        ></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">
              Equipe de Desenvolvimento
            </motion.h2>
            <motion.div
              variants={fadeIn}
              className="h-1 w-20 bg-blue-500 mx-auto mb-8"
            />
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Conheça os profissionais responsáveis pelo desenvolvimento do
              Sistema de Auditoria da Invye.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card
                  className={`bg-slate-900 border-slate-700 p-6 h-full hover:${getColorClasses(
                    member.color,
                    "border"
                  )} transition-colors duration-300`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full mb-4 overflow-hidden">
                      <Image
                        src={member.photoUrl}
                        alt={`Foto de ${member.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className={`w-12 h-12 rounded-full ${getColorClasses(
                        member.color,
                        "bg"
                      )} flex items-center justify-center mb-4 border-2 ${getColorClasses(
                        member.color,
                        "border"
                      )}`}
                    >
                      {member.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <Badge
                      className={`${getColorClasses(
                        member.color,
                        "badge"
                      )} mb-4`}
                    >
                      {member.role}
                    </Badge>
                    <p className="text-gray-400 text-sm">
                      {member.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          ></motion.div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8">
              Principais Entregas
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                <h3 className="text-xl font-bold mb-4">Sistema Completo</h3>
                <p className="text-gray-300">
                  Sistema completo de rastreamento com módulos de bebidas e
                  proteínas, integrações com ERPs e dashboards avançados.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                <h3 className="text-xl font-bold mb-4">
                  Cronograma de Lançamento
                </h3>
                <p className="text-gray-300">
                  Lançamento comercial previsto para 2026 com início das
                  operações SaaS e sistema de onboarding.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
                <h3 className="text-xl font-bold mb-4">
                  Estratégia de Expansão
                </h3>
                <p className="text-gray-300">
                  Foco inicial em estabelecimentos de médio porte
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sistema de Rastreamento de Bebidas.
            Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
