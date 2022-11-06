import { Data } from '../models/data';

const dataFR:Data = {
  labelShowMore: 'Montre Plus',
  labelShowLess: 'Montrer Moins',
  menu: [
    {
      id: 1,
      label: 'Vivre',
      href: '#experience',
    },
    {
      id: 2,
      label: 'Projets',
      href: '#project',
    },
    {
      id: 3,
      label: 'Éducation',
      href: '#education',
    },
    {
      id: 4,
      label: 'Les Technologies',
      href: '#technology',
    },
    {
      id: 5,
      label: 'Certificats',
      href: '#certification',
    },
    {
      id: 6,
      label: 'À propos de moi',
      href: '#about-me',
    },
    {
      id: 7,
      label: 'Contactez moi',
      href: '#contact',
    },
  ],
  banner: {
    name: 'Hugo Quispe',
    degree: 'Ingénieur en informatique',
    specialty: 'FrontEnd | FullStack Developer',
    imageSrc: 'https://image.hugoquispe.cl/assets/img/hugo.png',
    imageAlt: 'Hugo\'s Photo',
  },
  contact: [
    {
      id: 1,
      icon: 'pi pi-whatsapp',
      url: 'https://api.whatsapp.com/send?phone=+56983499427&text=Bonjour!!!%0Aje regardais votre portfolio et j\'aimerais travailler avec vous.',
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
  experienceTitle: 'Vivre',
  technologyLabel: 'Les technologies',
  jobFunctionLabel: 'Fonctions de travail',
  repositoryLabel: 'Dépôt',
  experiences: [
    {
      id: 1,
      title: 'Développeur FrontEnd',
      project: 'Projet: BanConexión',
      description: 'Application mobile développée en React Native axée sur les entreprises clientes de Banco de Chile.',
      jobFunctions: [
        'Développement et maintenance de l\'interface utilisateur d\'applications mobiles à l\'aide de React Native.',
        'Débogage d\'applications à l\'aide de Flipper et d\'émulateurs IOS et Android.',
        'Développement de tests unitaires avec Jest et Testing Library.',
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
      employerTitle: 'Employeur',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/3itLogo.jfif',
        logoAlt: '3it Logo',
      },
    },
    {
      id: 2,
      title: 'Développeur Java',
      project: 'Projet : Migration Liferay CGR',
      description: 'Divers portails informatifs et administratifs du Contrôleur général de la République du Chili.',
      jobFunctions: [
        'Migration des portails de Liferay 6.2 vers Liferay Dxp 7.3.',
        'Migration du thème de Velocity vers FreeMarker.',
        'Migration de sites Web (HTML, CSS et JS) vers les thèmes Liferay.',
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
      employerTitle: 'Employeur',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/valpo-logo.png',
        logoAlt: 'ValpoSystems Logo',
      },
    },
    {
      id: 3,
      title: 'Développeur Full Stack',
      project: 'Projet: Portal Prestadores',
      description: 'Portail axé sur l\'administration des prestataires médicaux et les avantages qu\'ils offrent.',
      jobFunctions: [
        'Développement de l\'interface utilisateur avec Angular et PrimeNG.',
        'Requêtes HTTP au backend à l\'aide d\'Angular.',
        'Développement backend avec Spring, Hibernate, Jboss et Camel.',
        'Développement et maintenance de la base de données dans Sql Server.',
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
      employerTitle: 'Employeur',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/valpo-logo.png',
        logoAlt: 'ValpoSystems Logo',
      },
    },
    {
      id: 4,
      title: 'Étudiant de prégrade',
      project: 'Implémentation de dashboards',
      description: 'Création de planches visuelles pour la division Andina de Codelco.',
      jobFunctions: [
        'Développement d\'un système de contrôle pour l\'usine de concentration de la division.',
        'Développement de panneaux de contrôle pour la gestion des ressources humaines.',
      ],
      technologies: [
        {
          id: 1,
          logoSrc: 'https://image.hugoquispe.cl/assets/svg/powerbi-logo.png',
          logoAlt: 'PowerBI Logo',
        },
      ],
      clientTitle: 'Compagnie',
      client: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/codelco-logo.png',
        logoAlt: 'Codelco Logo',
      },
      employerTitle: 'l\'universitè',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uta-logo.png',
        logoAlt: 'Universidad de Tarapaca Logo',
      },
    },
    {
      id: 5,
      title: 'Développeur Full Stack',
      project: 'Projet: VendeComida',
      description: 'Système de gestion de restaurant axé sur les PME soutenu par Sercotec.',
      jobFunctions: [
        'Développement d\'interface utilisateur avec Angular et MaterialUI.',
        'Requêtes HTTP au backend à l\'aide d\'Angular.',
        'Développement backend avec NodeJS et Express.',
        'Développement et maintenance de la base de données en MongoDB.',
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
      employerTitle: 'Employeur',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/waliex-logo.png',
        logoAlt: 'Waliex Logo',
      },
    },
    {
      id: 6,
      title: 'Développeur Wordpress',
      project: 'Projets: Ruta Digital',
      description: 'Développement du commerce électronique pour les PME bénéficiant du programme Sercotec Digital Route.',
      jobFunctions: [
        'Conduite d\'entretiens et recueil des besoins.',
        'Développement et conception de commerce électronique avec WordPress.',
        'Configuration du plugin et intégration avec Transbank.',
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
      employerTitle: 'Employeur',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/waliex-logo.png',
        logoAlt: 'Waliex Logo',
      },
    },
    {
      id: 7,
      title: 'Développeur PHP',
      project: 'Projet: e-SEIA',
      description: 'Système de gestion qui facilite au Service d\'évaluation environnementale l\'évaluation et l\'autorisation d\'un projet avant son exécution.',
      jobFunctions: [
        'Résolution des tickets d\'incidents.',
        'Développement des mainteneurs du système.',
        'Maintenance des fonctionnalités du système.',
        'Maintenance de la base de données dans SQL Server.',
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
      employerTitle: 'Employeur',
      employer: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/sea-logo.png',
        logoAlt: 'SEA Logo',
      },
    },
  ],
  projectTitle: 'Projets personnels',
  projects: [
    {
      id: 1,
      title: 'Portefeuille personnel',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/portfolio-new-logo.svg',
        logoAlt: 'Icône de portefeuille',
      },
      description: 'Projet de portefeuille axé sur l\'application des connaissances dans React, TailWind et de bons outils de code tels que EsLint, sans avoir besoin d\'un framework de composants.',
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
      title: 'Ancien portefeuille personnel',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/portafolio-logo.svg',
        logoAlt: 'Ancienne icône de portefeuille',
      },
      description: 'Projet réalisé dans le but d\'appliquer React avec TypeScript et d\'avoir un programme numérique.',
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
      title: 'Paiements avec Transbank',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/tb-logo.svg',
        logoAlt: 'Icône de paiement',
      },
      description: 'Projet axé sur l\'exploration de la mise en œuvre de l\'intégration entre NodeJs et Transbank.',
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
      title: 'Remake d\'animaux perdus',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/mpr-logo.svg',
        logoAlt: 'Icône de chien',
      },
      description: 'Projet axé sur l\'exploration de Spring Boot en tant que BackEnd.',
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
      title: 'Application de livraison',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/deliveryapp-logo.svg',
        logoAlt: 'Icône de moto',
      },
      description: 'Projet axé sur la mise en pratique des principes React et l\'application des bonnes pratiques au niveau BackEnd.',
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
      title: 'j\'ai besoin de ma bière',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/nmc-logo.svg',
        logoAlt: 'Verre avec l\'icône de la bière',
      },
      description: 'Projet réalisé pour mieux comprendre Vue, télécharger des images sur imgbb et localisation.',
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
      title: 'Animaux perdus',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/svg/mp-logo.svg',
        logoAlt: 'Icône de chat',
      },
      description: 'Projet axé sur l\'apprentissage de Laravel à travers une petite application pour retrouver des animaux perdus.',
      technologies: [
        'Laravel',
        'MySQL',
        'Bootstrap',
      ],
      urlGithub: 'https://github.com/hugoquispepacaje/mascotasperdidas',
    },
  ],
  educationTitle: 'Éducation',
  educations: [
    {
      id: 1,
      university: 'Universidad de Tarapacá',
      description: 'Ingénierie informatique',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uta-logo.png',
        logoAlt: 'Uta Logo',
      },
    },
    {
      id: 2,
      university: 'UNdeC',
      description: 'Étudiant d\'échange',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/undec-logo.png',
        logoAlt: 'UNdeC Logo',
      },
    },
    {
      id: 3,
      university: 'UPDS',
      description: 'Étudiant d\'échange',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/upds-logo.png',
        logoAlt: 'UPDS Logo',
      },
    },
    {
      id: 4,
      university: 'Universidad de Buenos Aires',
      description: 'Cours intensifs ECI',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/uba-logo.png',
        logoAlt: 'UBA Logo',
      },
    },
    {
      id: 5,
      university: 'Universidad de Medellín',
      description: 'Étudiant d\'échange',
      logo: {
        id: 1,
        logoSrc: 'https://image.hugoquispe.cl/assets/img/udem-logo.png',
        logoAlt: 'UDEM Logo',
      },
    },
  ],
  certificationTitle: 'Certificats',
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
  technologyTitle: 'Les technologies',
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
  aboutMeTitle: 'À propos de moi',
  aboutMe: {
    description: `Passionné de technologie, j'aime en ce moment tout ce qui touche à JavaScript. Je suis un adepte fidèle de l'apprentissage autodidacte mais j'ai pour objectif de faire une maîtrise.
    J'aime voyager et pratiquer la natation. Mes animaux préférés sont les tortues marines et les chats, chez moi nous avons 6 merveilleux chatons. Je laisse une photo de certains pour que vous puissiez les rencontrer.`,
    imageUrl: 'https://image.hugoquispe.cl/assets/img/misGatos.jpeg',
    imageAlt: 'Mes chats',
  },
  contactTitle: 'Aimeriez-vous travailler avec moi?',
  contactSubtitle: 'Contactez moi!',
  footer: {
    leftSide: 'Portefeuille Hugo Quispe',
    rightSide: '2022 - Projet personnel',
  },
};

export default dataFR;
