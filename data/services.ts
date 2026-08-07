import {
  Brain,
  HeartHandshake,
  Sprout,
  Users,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

export const services = [
  {
    icon: Brain,
    title: "Psicología Clínica",
    description:
      "Atención profesional para ayudarte a comprender y manejar los retos emocionales.",
    benefits: ["Ansiedad", "Depresión", "Estrés"],
    href: "/servicios/psicologia-clinica",
  },
  {
    icon: HeartHandshake,
    title: "Bienestar Emocional",
    description:
      "Fortalece tu salud emocional con herramientas personalizadas.",
    benefits: ["Autoestima", "Relaciones", "Manejo emocional"],
    href: "/servicios/bienestar-emocional",
  },
  {
    icon: Sprout,
    title: "Crecimiento Personal",
    description:
      "Desarrolla habilidades para alcanzar tus objetivos personales.",
    benefits: ["Motivación", "Hábitos", "Desarrollo"],
    href: "/servicios/crecimiento-personal",
  },
  {
    icon: Users,
    title: "Terapia Familiar",
    description:
      "Mejora la comunicación y fortalece los vínculos familiares.",
    benefits: ["Comunicación", "Conflictos", "Relaciones"],
    href: "/servicios/terapia-familiar",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluaciones Psicológicas",
    description:
      "Evaluaciones adaptadas a las necesidades de cada paciente.",
    benefits: ["Diagnóstico", "Informes", "Valoración"],
    href: "/servicios/evaluaciones",
  },
  {
    icon: Sparkles,
    title: "Programas de Bienestar",
    description:
      "Programas diseñados para mejorar tu calidad de vida.",
    benefits: ["Equilibrio", "Prevención", "Bienestar"],
    href: "/servicios/programas",
  },
];