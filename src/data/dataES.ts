import { Data } from '../models/data';

const dataES:Data = {
  labelShowMore: 'Ver Más',
  labelShowLess: 'Ver Menos',
  menu: [
    {
      id: 1,
      label: 'Experiencia',
      href: '#experience',
    },
    {
      id: 2,
      label: 'Proyectos',
      href: '#project',
    },
    {
      id: 3,
      label: 'Educación',
      href: '#education',
    },
    {
      id: 4,
      label: 'Tecnologías',
      href: '#technology',
    },
    {
      id: 5,
      label: 'Certificaciónes',
      href: '#certification',
    },
    {
      id: 6,
      label: 'Sobre Mí',
      href: '#about-me',
    },
    {
      id: 7,
      label: 'Contáctame',
      href: '#contact',
    },
  ],
  banner: {
    name: 'Hugo Quispe',
    degree: 'Ingeniero Civil en Computación e Informática',
    specialty: 'Desarrollador FrontEnd | FullStack',
    imageSrc: 'https://image.hugoquispe.cl/assets/img/hugo.png',
    imageAlt: 'Hugo\'s Photo',
  },
  contact: [
    {
      id: 1,
      icon: 'pi pi-whatsapp',
      url: 'https://api.whatsapp.com/send?phone=+56983499427&text=Hola!!!%0AEstaba viendo tu portafolio y me gustaria trabajar contigo.',
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
  experienceTitle: 'Experiencia',
  technologyLabel: 'Tecnologías',
  jobFunctionLabel: 'Funciones del cargo',
  repositoryLabel: 'Repositorio',
  experiences: [
    {
      id: 1,
      title: 'Desarrollador FrontEnd',
      project: 'Projecto: BanConexión',
      description: 'Aplicación mobile desarrollada en React Native enfocada a los Clientes tipo Empresas de el Banco de Chile.',
      jobFunctions: [
        'Desarrollo y mantenimiento de la interfaz de usuario de la aplicación móvil utilizando React Native.',
        'Depuración de aplicaciones mediante Flipper y emuladores de IOS y Android.',
        'Desarrollo de pruebas unitarias utilizando Jest y Testing Library.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/react-logo.svg',
          logoAlt: 'React Logo',
        },
      ],
      clientTitle: 'Cliente',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/bancoChileLogo.jfif',
        logoAlt: 'Banco de Chile Logo',
      },
      employerTitle: 'Empleador',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/3itLogo.jfif',
        logoAlt: '3it Logo',
      },
    },
    {
      id: 2,
      title: 'Desarrollador Java',
      project: 'Projecto: Migración Liferay CGR',
      description: 'Diversos portales informativos y administrativos de la Contraloria General de la Republica de Chile.',
      jobFunctions: [
        'Migración de portales de Liferay 6.2 a Liferay Dxp 7.3.',
        'Migración de temas de Velocity a FreeMarker.',
        'Migración de Sitios Web (HTML, CSS y JS) a temas de Liferay.',
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
      clientTitle: 'Cliente',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/LogoCGR.png',
        logoAlt: 'CGR Logo',
      },
      employerTitle: 'Empleador',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/valpo-logo.png',
        logoAlt: 'ValpoSystems Logo',
      },
    },
    {
      id: 3,
      title: 'Desarrollador Full Stack',
      project: 'Proyecto: Portal Prestadores',
      description: 'Portal enfocado en la administración de prestadores médicos y las prestaciones que brindan.',
      jobFunctions: [
        'Desarrollo de interfaz de usuario usando Angular y PrimeNG.',
        'Solicitudes HTTP al backend usando Angular.',
        'Desarrollo backend usando Spring, Hibernate, Jboss y Camel.',
        'Desarrollo y mantenimiento de la base de datos en Sql Server.',
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
      clientTitle: 'Cliente',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/LogoISL.jpg',
        logoAlt: 'ISL Logo',
      },
      employerTitle: 'Empleador',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/valpo-logo.png',
        logoAlt: 'ValpoSystems Logo',
      },
    },
    {
      id: 4,
      title: 'Memorista',
      project: 'Implementación de Dashboards',
      description: 'Creación de tableros visuales para la división Andina de Codelco.',
      jobFunctions: [
        'Desarrollo de un sistema de control para la planta concentradora de la división.',
        'Desarrollo de paneles de control para la gerencia de Recursos Humanos.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/powerbi-logo.png',
          logoAlt: 'PowerBI Logo',
        },
      ],
      clientTitle: 'Empresa',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/codelco-logo.png',
        logoAlt: 'Codelco Logo',
      },
      employerTitle: 'Universidad',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uta-logo.png',
        logoAlt: 'Universidad de Tarapaca Logo',
      },
    },
    {
      id: 5,
      title: 'Desarrollador Full Stack',
      project: 'Proyecto: VendeComida',
      description: 'Sistema de gestión de restaurantes enfocado a Pymes beneficiadas por Sercotec.',
      jobFunctions: [
        'Desarrollo de interfaz de usuario usando Angular y MaterialUI.',
        'Solicitudes HTTP al backend usando Angular.',
        'Desarrollo backend usando NodeJS y Express.',
        'Desarrollo y mantenimiento de la base de datos en MongoDB.',
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
      clientTitle: 'Clientes',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sercotec-logo.png',
        logoAlt: 'Sercotec Logo',
      },
      employerTitle: 'Empleador',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/waliex-logo.png',
        logoAlt: 'Waliex Logo',
      },
    },
    {
      id: 6,
      title: 'Desarrollador Wordpress',
      project: 'Proyectos: Ruta Digital',
      description: 'Desarrollo de ECommerce para las Pymes beneficiadas por el programa Ruta Digital del Sercotec.',
      jobFunctions: [
        'Realización entrevistas y levantamiento de requisitos.',
        'Desarrollo y diseño del ECommerce con WordPress.',
        'Configuración de Plugins de WordPress e integración con Transbank.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/img/wordpress-logo.png',
          logoAlt: 'WordPress Logo',
        },
      ],
      clientTitle: 'Clientes',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sercotec-logo.png',
        logoAlt: 'Sercotec Logo',
      },
      employerTitle: 'Empleador',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/waliex-logo.png',
        logoAlt: 'Waliex Logo',
      },
    },
    {
      id: 7,
      title: 'Desarrollador PHP',
      project: 'Proyecto: e-SEIA',
      description: 'Sistema de gestión que le facilita al Servicio de Evaluación Ambiental la evaluación y autorización de un proyecto antes de su ejecución.',
      jobFunctions: [
        'Resolución de tickets de incidencias.',
        'Desarrollo de mantenedores para el sistema.',
        'Mantención de funcionalidades del sistema.',
        'Mantención de la base de datos en SQL Server.',
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
      clientTitle: 'Cliente',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sea-logo.png',
        logoAlt: 'SEA Logo',
      },
      employerTitle: 'Empleador',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sea-logo.png',
        logoAlt: 'SEA Logo',
      },
    },
  ],
  projectTitle: 'Proyectos Personales',
  projects: [
    {
      id: 1,
      title: 'Portafolio Personal',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/portfolio-new-logo.svg',
        logoAlt: 'Icono de Portafolio',
      },
      description: 'Proyecto de portafolio enfocado en aplicar conocimientos en React, TailWind y herramientas de buen codigo como EsLint, sin necesidad de un Framework de componentes.',
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
      title: 'Portafolio Personal Old',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/portafolio-logo.svg',
        logoAlt: 'Icono Portafolio Antiguo',
      },
      description: 'Proyecto realizado con el propósito de aplicar React junto a TypeScript y tener un curriculum digital.',
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
      title: 'Pagos con Transbank',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/tb-logo.svg',
        logoAlt: 'Icono de pago',
      },
      description: 'Proyecto enfocado en explorar como implementar la integración entre NodeJs y Transbank.',
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
      title: 'Mascotas Perdidas Remake',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/mpr-logo.svg',
        logoAlt: 'Icono de Perro',
      },
      description: 'Proyecto enfocado en explorar Spring Boot como BackEnd.',
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
        logoAlt: 'Icono de Motocicleta',
      },
      description: 'Proyecto enfocado poner en practicas los principios de React y aplicar buenas practicas a nivel de BackEnd.',
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
      title: 'Necesito mi chela',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/nmc-logo.svg',
        logoAlt: 'Icono de Vaso con Cerveza',
      },
      description: 'Proyecto realizado para adquirir un mayor entendimiento de Vue, la subida de imágenes a imgbb y la localización.',
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
      title: 'Mascotas Perdidas',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/mp-logo.svg',
        logoAlt: 'Icono de Gato',
      },
      description: 'Proyecto enfocado en adentrarse a Laravel a través de una pequeña aplicación para encontrar mascotas perdidas.',
      technologies: [
        'Laravel',
        'MySQL',
        'Bootstrap',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/mascotasperdidas',
    },
  ],
  educationTitle: 'Educación',
  educations: [
    {
      id: 1,
      university: 'Universidad de Tarapacá',
      description: 'Ing. Civil en Computación e Informática',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uta-logo.png',
        logoAlt: 'Uta Logo',
      },
    },
    {
      id: 2,
      university: 'UNdeC',
      description: 'Estudiante de intercambio',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/undec-logo.png',
        logoAlt: 'UNdeC Logo',
      },
    },
    {
      id: 3,
      university: 'UPDS',
      description: 'Estudiante de intercambio',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/upds-logo.png',
        logoAlt: 'UPDS Logo',
      },
    },
    {
      id: 4,
      university: 'Universidad de Buenos Aires',
      description: 'Cursos intensivos ECI',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uba-logo.png',
        logoAlt: 'UBA Logo',
      },
    },
    {
      id: 5,
      university: 'Universidad de Medellín',
      description: 'Estudiante de intercambio',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/udem-logo.png',
        logoAlt: 'UDEM Logo',
      },
    },
  ],
  certificationTitle: 'Certificaciones',
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
  technologyTitle: 'Tecnologías Manejadas',
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
  aboutMeTitle: 'Sobre Mi',
  aboutMe: {
    description: `Apasionado por la tecnología, en estos momentos me gusta todo lo relacionado con JavaScript. Soy fiel creyente del aprendizaje autodidacta pero tengo como objetivo hacer una maestría.
    Me gusta viajar y practicar natación. Mis animales favoritos son las tortugas marinas y los gatos, en mi casa tenemos a 6 maravillosos gatitos. Les dejo una foto de algunos para que los conozcan.`,
    imageUrl: 'https://image.hugoquispe.cl/assets/img/misGatos.jpeg',
    imageAlt: 'Mis Gatos',
  },
  contactTitle: '¿Te gustaría trabajar conmigo?',
  contactSubtitle: '¡Contactame!',
  footer: {
    leftSide: 'Portafolio Hugo Quispe',
    rightSide: '2022 - Proyecto Personal',
  },
};

export default dataES;
