import { Data } from '../models/data';

const dataEN:Data = {
  labelShowMore: 'Show More',
  labelShowLess: 'Show Less',
  menu: [
    {
      id: 1,
      label: 'Experience',
      href: '#experience',
    },
    {
      id: 2,
      label: 'Projects',
      href: '#project',
    },
    {
      id: 3,
      label: 'Education',
      href: '#education',
    },
    {
      id: 4,
      label: 'Technologies',
      href: '#technology',
    },
    {
      id: 5,
      label: 'Certifications',
      href: '#certification',
    },
    {
      id: 6,
      label: 'About Me',
      href: '#about-me',
    },
    {
      id: 7,
      label: 'Contact Me',
      href: '#contact',
    },
  ],
  banner: {
    name: 'Hugo Quispe',
    degree: 'Computer Science Engineer',
    specialty: 'FrontEnd | FullStack Developer',
    imageSrc: 'https://image.hugoquispe.cl/assets/img/hugo.png',
    imageAlt: 'Hugo\'s Photo',
  },
  contact: [
    {
      id: 1,
      icon: 'pi pi-whatsapp',
      url: 'https://api.whatsapp.com/send?phone=+56983499427&text=Hello!!!%0AI was looking at your portfolio and would like to work with you.',
      isNewTab: true,
    },
    {
      id: 2,
      icon: 'pi pi-envelope',
      url: 'mailto:hugo.quispe96@outlook.el',
      isNewTab: false,
    },
    {
      id: 3,
      icon: 'pi pi-linkedin',
      url: 'https://www.linkedin.com/in/hugo-quispe-pacaje-71b1b6119/',
      isNewTab: true,
    },
    {
      id: 4,
      icon: 'pi pi-github',
      url: 'https://github.com/hugoquispepacaje/portfolio',
      isNewTab: true,
    },
  ],
  experienceTitle: 'Experience',
  technologyLabel: 'Technologies',
  jobFunctionLabel: 'Job functions',
  repositoryLabel: 'Repository',
  experiences: [
    {
      id: 1,
      title: 'FrontEnd Developer',
      project: 'Project: BanConexión',
      description: 'Mobile application developed in React Native focused on Business-type Clients of Banco de Chile.',
      jobFunctions: [
        'Mobile app UI development and maintenance using React Native.',
        'Application debugging using Flipper and IOS and Android emulators.',
        'Development of unit tests using Jest and Testing Library.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/react-logo.svg',
          logoAlt: 'React Logo',
        },
      ],
      clientTitle: 'Client',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/bancoChileLogo.jfif',
        logoAlt: 'Banco de Chile Logo',
      },
      employerTitle: 'Employer',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/3itLogo.jfif',
        logoAlt: '3it Logo',
      },
    },
    {
      id: 2,
      title: 'Java Developer',
      project: 'Project: Migration Liferay CGR',
      description: 'Various informative and administrative portals of the Comptroller General of the Republic of Chile.',
      jobFunctions: [
        'Migration of portals from Liferay 6.2 to Liferay Dxp 7.3.',
        'Theme migration from Velocity to FreeMarker.',
        'Migration of Websites (HTML, CSS and JS) to Liferay themes.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/img/liferay-logo.png',
          logoAlt: 'Liferay Logo',
        },
        {
          id: 2,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/java-logo.svg',
          logoAlt: 'Java Logo',
        },
      ],
      clientTitle: 'Client',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/LogoCGR.png',
        logoAlt: 'CGR Logo',
      },
      employerTitle: 'Employer',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/valpo-logo.png',
        logoAlt: 'ValpoSystems Logo',
      },
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      project: 'Project: Portal Prestadores',
      description: 'Portal focused on the administration of medical providers and the benefits they provide.',
      jobFunctions: [
        'User interface development using Angular and PrimeNG.',
        'HTTP requests to the backend using Angular.',
        'Backend development using Spring, Hibernate, Jboss and Camel.',
        'Development and maintenance of the database in Sql Server.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/angular-logo.svg',
          logoAlt: 'Angular Logo',
        },
        {
          id: 2,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/spring-logo.svg',
          logoAlt: 'Spring Logo',
        },
        {
          id: 3,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/sqlserver-logo.svg',
          logoAlt: 'Sql Server Logo',
        },
      ],
      clientTitle: 'Client',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/LogoISL.jpg',
        logoAlt: 'ISL Logo',
      },
      employerTitle: 'Employer',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/valpo-logo.png',
        logoAlt: 'ValpoSystems Logo',
      },
    },
    {
      id: 4,
      title: 'Thesis Student',
      project: 'Implementation of dashboards',
      description: 'Creation of visual boards for the Andina division of Codelco.',
      jobFunctions: [
        'Development of a control system for the division\'s concentrator plant.',
        'Development of control panels for Human Resources management.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/powerbi-logo.png',
          logoAlt: 'PowerBI Logo',
        },
      ],
      clientTitle: 'Company',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/codelco-logo.png',
        logoAlt: 'Codelco Logo',
      },
      employerTitle: 'University',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uta-logo.png',
        logoAlt: 'Universidad de Tarapaca Logo',
      },
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      project: 'Project: VendeComida',
      description: 'Restaurant management system focused on SMEs benefited by Sercotec.',
      jobFunctions: [
        'User interface development using Angular and MaterialUI.',
        'HTTP requests to the backend using Angular.',
        'Backend development using NodeJS and Express.',
        'Development and maintenance of the database in MongoDB.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/angular-logo.svg',
          logoAlt: 'Angular Logo',
        },
        {
          id: 2,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/nodejs-logo.svg',
          logoAlt: 'NodeJS Logo',
        },
        {
          id: 3,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/mongodb-logo.svg',
          logoAlt: 'MongoDB Logo',
        },
      ],
      clientTitle: 'Clients',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sercotec-logo.png',
        logoAlt: 'Sercotec Logo',
      },
      employerTitle: 'Employer',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/waliex-logo.png',
        logoAlt: 'Waliex Logo',
      },
    },
    {
      id: 6,
      title: 'Wordpress Developer',
      project: 'Projects: Ruta Digital',
      description: 'Development of ECommerce for SMEs benefited by the Sercotec Digital Route program.',
      jobFunctions: [
        'Conducting interviews and gathering requirements.',
        'Development and design of ECommerce with WordPress.',
        'Plugin configuration and integration with Transbank.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/img/wordpress-logo.png',
          logoAlt: 'WordPress Logo',
        },
      ],
      clientTitle: 'Clients',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sercotec-logo.png',
        logoAlt: 'Sercotec Logo',
      },
      employerTitle: 'Employer',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/waliex-logo.png',
        logoAlt: 'Waliex Logo',
      },
    },
    {
      id: 7,
      title: 'PHP Developer',
      project: 'Project: e-SEIA',
      description: 'Management system that facilitates the Environmental Evaluation Service the evaluation and authorization of a project before its execution.',
      jobFunctions: [
        'Resolution of incident tickets.',
        'Development of maintainers for the system.',
        'Maintenance of system functionalities.',
        'Database maintenance in SQL Server.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/php-logo.svg',
          logoAlt: 'PHP Logo',
        },
        {
          id: 2,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/sqlserver-logo.svg',
          logoAlt: 'Sql Server Logo',
        },
      ],
      clientTitle: 'Client',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sea-logo.png',
        logoAlt: 'SEA Logo',
      },
      employerTitle: 'Employer',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sea-logo.png',
        logoAlt: 'SEA Logo',
      },
    },
  ],
  projectTitle: 'Personal projects',
  projects: [
    {
      id: 1,
      title: 'Personal Portfolio',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/portfolio-new-logo.svg',
        logoAlt: 'Portfolio Icon',
      },
      description: 'Portfolio project focused on applying knowledge in React, TailWind and good code tools such as EsLint, without the need for a component framework.',
      technologies: [
        'React',
        'Vite',
        'TailWindCss',
        'EsLint',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/portfolio',
    },
    {
      id: 2,
      title: 'Old Personal Portfolio',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/portafolio-logo.svg',
        logoAlt: 'Old Portfolio Icon',
      },
      description: 'Project carried out with the purpose of applying React together with TypeScript and having a digital curriculum.',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'PrimeReact',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/portafolio',
    },
    {
      id: 3,
      title: 'Payments with Transbank',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/tb-logo.svg',
        logoAlt: 'Payment Icon',
      },
      description: 'Project focused on exploring how to implement the integration between NodeJs and Transbank.',
      technologies: [
        'NodeJs',
        'Express',
        'Handlebars',
        'Transbank API',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/pagos-app',
    },
    {
      id: 4,
      title: 'Lost Pets Remake',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/mpr-logo.svg',
        logoAlt: 'Dog Icon',
      },
      description: 'Project focused on exploring Spring Boot as a BackEnd.',
      technologies: [
        'SprigBoot',
        'MySQL',
        'Angular',
        'MaterialUI',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/mascotasremake',
    },
    {
      id: 5,
      title: 'Delivery App',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/deliveryapp-logo.svg',
        logoAlt: 'Motorcycle Icon',
      },
      description: 'Project focused on putting React principles into practice and applying good practices at the BackEnd level.',
      technologies: [
        'React',
        'NodeJs',
        'Express',
        'MySQL',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/deliveryapp',
    },
    {
      id: 6,
      title: 'I need my beer',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/nmc-logo.svg',
        logoAlt: 'Glass with beer icon',
      },
      description: 'Project made to better understand Vue, upload images to imgbb and localization.',
      technologies: [
        'Vue 2',
        'Vuetify',
        'NodeJs',
        'Express',
        'PostgreSQL',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/necesitomichela',
    },
    {
      id: 7,
      title: 'Lost Pets',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/mp-logo.svg',
        logoAlt: 'Cat Icon',
      },
      description: 'Project focused on learning Laravel through a small application to find lost pets.',
      technologies: [
        'Laravel',
        'MySQL',
        'Bootstrap',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/mascotasperdidas',
    },
  ],
  educationTitle: 'Education',
  educations: [
    {
      id: 1,
      university: 'Universidad de Tarapacá',
      description: 'Computer Science Engineering',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uta-logo.png',
        logoAlt: 'Uta Logo',
      },
    },
    {
      id: 2,
      university: 'UNdeC',
      description: 'Exchange student',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/undec-logo.png',
        logoAlt: 'UNdeC Logo',
      },
    },
    {
      id: 3,
      university: 'UPDS',
      description: 'Exchange student',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/upds-logo.png',
        logoAlt: 'UPDS Logo',
      },
    },
    {
      id: 4,
      university: 'Universidad de Buenos Aires',
      description: 'ECI intensive courses',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uba-logo.png',
        logoAlt: 'UBA Logo',
      },
    },
    {
      id: 5,
      university: 'Universidad de Medellín',
      description: 'Exchange student',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/udem-logo.png',
        logoAlt: 'UDEM Logo',
      },
    },
  ],
  certificationTitle: 'Certifications',
  certifications: [
    {
      id: 1,
      title: 'Scrum Foundation',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/SFPC.png',
        logoAlt: 'Scrum Foundation Logo',
      },
    },
    {
      id: 2,
      title: 'Scrum Master Professional',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/SMPC.png',
        logoAlt: 'Scrum Master Professional Logo',
      },
    },
    {
      id: 3,
      title: 'Verified International Academic Qualifications',
      logo: {
        id: 1,
        logoSrc: 'https://badges.wes.org/Evidence/Content/img/wes-digital_badge-icon.png',
        logoAlt: 'WES Badge Evidence Logo',
      },
    },
  ],
  technologyTitle: 'Technologies',
  technologies: [
    {
      id: 1,
      title: 'JavaScript',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/js-logo.svg',
        logoAlt: 'JavaScript Logo',
      },
    },
    {
      id: 2,
      title: 'TypeScript',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/ts-logo.svg',
        logoAlt: 'TypeScript Logo',
      },
    },
    {
      id: 3,
      title: 'PHP',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/php-logo.svg',
        logoAlt: 'PHP Logo',
      },
    },
    {
      id: 4,
      title: 'Java',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/java-logo.svg',
        logoAlt: 'Java Logo',
      },
    },
    {
      id: 5,
      title: 'Spring',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/spring-logo.svg',
        logoAlt: 'Spring Logo',
      },
    },
    {
      id: 6,
      title: 'Node-Express',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/nodejs-logo.svg',
        logoAlt: 'Node-Express Logo',
      },
    },
    {
      id: 7,
      title: 'Laravel',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/laravel-logo.svg',
        logoAlt: 'Laravel Logo',
      },
    },
    {
      id: 8,
      title: 'Angular',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/angular-logo.svg',
        logoAlt: 'Angular Logo',
      },
    },
    {
      id: 9,
      title: 'React - React Native',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/react-logo.svg',
        logoAlt: 'React - React Native Logo',
      },
    },
    {
      id: 10,
      title: 'Vue',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/vue-logo.svg',
        logoAlt: 'Vue Logo',
      },
    },
    {
      id: 11,
      title: 'MySQL',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/mysql-logo.svg',
        logoAlt: 'MySQL Logo',
      },
    },
    {
      id: 12,
      title: 'PostgreSQL',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/postgresql-logo.svg',
        logoAlt: 'PostgreSQL Logo',
      },
    },
    {
      id: 13,
      title: 'SQLServer',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/sqlserver-logo.svg',
        logoAlt: 'SQLServer Logo',
      },
    },
    {
      id: 14,
      title: 'MongoDB',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/mongodb-logo.svg',
        logoAlt: 'MongoDB Logo',
      },
    },
    {
      id: 15,
      title: 'PowerBI',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/powerbi-logo.png',
        logoAlt: 'PowerBI Logo',
      },
    },
  ],
  aboutMeTitle: 'About me',
  aboutMe: {
    description: `Passionate about technology, at the moment I like everything related to JavaScript. I am a faithful believer in self-taught learning but I have the goal of doing a master's degree.
    I like to travel and practice swimming. My favorite animals are sea turtles and cats, in my house we have 6 wonderful kittens. I leave a photo of some so you can meet them.`,
    imageUrl: 'https://image.hugoquispe.cl/assets/img/misGatos.jpeg',
    imageAlt: 'My cats',
  },
  contactTitle: 'Would you like to work with me?',
  contactSubtitle: 'Contact me!',
  footer: {
    leftSide: 'Portfolio Hugo Quispe',
    rightSide: '2022 - Personal Project',
  },
};

export default dataEN;
