import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  senter,
  mirasol,
  shopify,
  softdepot,
  carrent,
  jobit,
  tripguide,
  expertum,
  laravel,
  senterJob,
  voyagerAppJob,
  voyagerJob,
  hrzJob,
  dimovereJob
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Laravel Developer",
    icon: backend,
  },
  {
    title: "Microservices",
    icon: backend,
  },
  {
    title: "Salesforce Developer",
    icon: creator,
  },
  {
    title: "Azure",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Manager",
    company_name: "Senter Logistics",
    icon: senter,
    link :'https://senter.mx',
    iconBg: "#383E56",
    date: "Marzo 2020 – 8 de Diciembre 2023",
    points: [
      "Development of mobile platforms with web technology and applications for Android and IOS",
      "Server management and domains (Hostinger, Aure).",
      "IT inventory management. Odoo Inventory",
      "Database management (MYSQL)",
      "Salesforce Developer (JAVA, APEX, SOQL)",
      "Development of Senter.mx and voyager.mx (Laravel, React, API Integrations with        external providers). https://senter.mx https://voyager.mx",
      "Development of HRZ Logistics. https://hrzlogistics.mx/",
      "Development of Voyager App for Android and IOS using React Native.",
      "Management of Microsoft 365.",
      "Technical service for all team members.",
      "Front.io App management.",
      "Custom documentation of all departments on  docs.senter.mx",
      "Massive mailing and api connections using sendgrid",
      "Created Centralized API at api.senter.mx",
      "Errors tracking and management using sentry.io",
      "Billing API integration using alerga billing software for México"
    ],
  },
  {
    title: "Web and Mobile developer",
    company_name: "SoftDepot",
    icon: softdepot,
    link : "https://www.softdepot.mx/",
    iconBg: "#E6DEDD",
    date: "March 2019 – February 15 - 2020",
    points: [
      "Platforms Development using web technologies.",
      "Payment gateways integration like Conekta and Stripe",
      "Movile Development for Android and IOS with React Native",
      "Applied technologies: Laravel 5.8+, PHP, Bootstrap 4.4, HTML5, CSS, JavaScript, Vue.js, React, GraphQL",
      "Other applied knowledge: Phyton, Django, Express, Node, Golang, Electron.js, Git",
    ],
  },
  {
    title: "Web Developer",
    company_name: "EXPERTUM – Technologies & Business",
    icon: expertum,
    link : 'https://www.expertum.com.co/',
    iconBg: "#383E56",
    date: "May 2018 – February 2019",
    points: [
      "E-commerce platform development. (Web Store and CMS – Admin panel ). Built using Laravel.",
      "E-commerce built for  https://materilejuguetes.com/",
      "Payment gateways integration like MercadoPago, ePayco and PAYU.",
      "External REST API’S fetch for products.",
      "Applied technologies: Laravel 5.7, PHP, Bootstrap 4.1.3, HTML5, JavaScript, JQuery, Axios, Server Side DataTables, Web Pack",
    ],
  },
  {
    title: "Web Developer (Practices)",
    company_name: "Zona Franca Industrial, Comercial y de Servicios de Paraguaná. ZONFIPCA.",
    link : 'https://www.youtube.com/watch?v=AacL_aAiFSA',
    icon: laravel,
    iconBg: "#E6DEDD",
    date: "July 2017 – December 2017",
    points: [
      "Development of a Platform for visitors control",
      "Chat Development for the inner comunication of the company",
      "Development of a web application to manage all the events programmed by the company.",
      "Applied technologies: Laravel 5.0, PHP, Materialize CSS, HTML5, JavaScript, JQuery, Server Side DataTables, JCalendar."
    ],
  },
  {
    title: "Software Auditor",
    company_name: "Mirasol Hotel Boutique Paraguaná.",
    link : 'https://mirasolhotelboutique.com/',
    icon: mirasol,
    iconBg: "#E6DEDD",
    date: "October 2016 – July 2017",
    points: [
      "Systems auditor, financial and receptionist.",
      "Monitoring and control of reception procedures using the Premium Soft Administrative System.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Senter Logistics Platform",
    description:
      "Senter is a 100% Mexican company based in Monterrey. They have more than 10 years of experience in the National and International market, also agreements with all shipping agencies and cargo agents globally, which allows them to cover the entire journey of the containers, whether import or export.",
    tags: [
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Filament",
        color: "pink-text-gradient",
      },
    ],
    image: senterJob,
    source_code_link: "https://github.com/jhoanborges",
  },
  {
    name: "Voyager APP",
    description:
      "Voyager gets always the optimal route of your cargo. Find everything you need to optimize your supply chain—and your business—on the Voyager Platform.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: voyagerAppJob,
    source_code_link: "https://github.com/jhoanborges",
  },
  {
    name: "Voyager Platform",
    description:
      "Voyager gets always the optimal route of your cargo. Find everything you need to optimize your supply chain—and your business—on the Voyager Platform.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: voyagerJob,
    source_code_link: "https://github.com/jhoanborges",
  },
  {
    name: "HRZ Logistics",
    description:
      "HRZ handles end-to-end warehousing and distribution logistics from its strategic network of warehousing facilities; able to meet the demands of its customers.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: hrzJob,
    source_code_link: "https://github.com/jhoanborges",
  },
  {
    name: "Dimovere Website",
    description:
      "Dimovere es una constructora con un gran sentido humano, que impulsa el crecimiento integral de sus empleados.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: dimovereJob,
    source_code_link: "https://github.com/jhoanborges",
  },
];

export { services, technologies, experiences, testimonials, projects };
