import { Project, Experience, Education, Skill } from './types';

export const CONTACT = {
  name: "Rehab Abdelmalek",
  role: "Frontend Developer",
  phone: "+201556885190",
  email: "rehabmohamed1025@gmail.com",
  linkedin: "linkedin.com/in/rehab-mohammed-964a722a4",
  location: "6th of October, Giza, Egypt",
  photo: "/profile.jpg"
};

export const CAREER_OBJECTIVE = "Passionate Frontend Developer and Computer Science student specializing in building responsive, high-performance web applications with React. Focused on creating seamless user experiences through modern frontend architectures, state management, and clean, maintainable code.";

export const EDUCATION: Education[] = [
  {
    degree: "BSc Computer Science",
    institution: "Helwan University, Cairo",
    period: "2022–2026",
    details: "Focus on Software Engineering and Web Technologies. GPA: 2.99"
  },
  {
    degree: "High School Diploma",
    institution: "Sharjah Public School, UAE",
    period: "2022",
    details: "AS Level: 2 A's"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "React Frontend Developer Trainee",
    company: "DEPI (Digital Egypt Pioneers Initiative)",
    period: "Present",
    description: [
      "Developing interactive UIs using React.js and modern JavaScript (ES6+)",
      "Implementing responsive designs with Tailwind CSS and Bootstrap",
      "Collaborating on version-controlled projects using Git and GitHub",
      "Optimizing web performance and ensuring cross-browser compatibility"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Property Rental Management System",
    role: "Frontend Lead",
    tools: ["React", "Tailwind CSS", "Redux", "Axios"],
    description: "Architected the frontend for a complex rental platform. Developed a comprehensive dashboard for landlords to manage properties and a seamless search experience for tenants. Focused on state management and real-time UI updates.",
    status: "Completed",
    githubLink: "https://lnkd.in/daMN4P2d"
  },
  {
    title: "ReeVue — Company Review Platform",
    role: "Frontend Developer",
    tools: ["React", "Framer Motion", "CSS Modules"],
    description: "A community-driven platform for company and interview reviews. Designed and implemented the Review Submission flow with complex form validation and the interactive User Profile dashboard.",
    status: "Currently Working On"
  },
  {
    title: "Smart Inventory AI",
    role: "Frontend & UI/UX Designer",
    tools: ["React", "Recharts", "Tailwind CSS", "Vite"],
    description: "AI-powered inventory system. Built interactive data visualizations for demand forecasting and expiry management. Developed a custom UI/UX design system to ensure a consistent and intuitive user experience.",
    status: "Currently Working On"
  }
];

export const SKILLS: Skill[] = [
  { name: "React.js", category: "Technical" },
  { name: "JavaScript (ES6+)", category: "Technical" },
  { name: "TypeScript", category: "Technical" },
  { name: "Tailwind CSS", category: "Technical" },
  { name: "HTML5 & CSS3", category: "Technical" },
  { name: "Redux / Context API", category: "Technical" },
  { name: "Responsive Design", category: "Technical" },
  { name: "Vite", category: "Technical" },
  { name: "Framer Motion", category: "Technical" },
  { name: "Git & GitHub", category: "Technical" },
  { name: "Bootstrap", category: "Technical" },
  { name: "Node.js", category: "Technical" },
  { name: "Teamwork", category: "Soft" },
  { name: "Adaptive Learning", category: "Soft" },
  { name: "UI/UX Principles", category: "Soft" },
  { name: "Problem-solving", category: "Soft" },
  { name: "Time Management", category: "Soft" },
  { name: "Arabic (Native)", category: "Language" },
  { name: "English (Fluent)", category: "Language" }
];

export const EXTRACURRICULAR = [
  {
    role: "Activities Assistant",
    org: "Bazarna Society",
    period: "Sep 2025–Present"
  },
  {
    role: "Volunteer",
    org: "Special Olympics Egypt",
    period: "June 2025",
    details: "Egyptian National Equestrian Competition qualifier for Special Olympics 2025"
  }
];
