import LanguageData from '../models/data';

const languageData:LanguageData[] = [
  {
    languageLabel: 'ES',
    data: {
      labelShowMore: 'Ver Más',
      labelShowLess: 'Ver Menos',
      menu: [
        {
          id: 1,
          label: 'Tecnologías',
          href: '#tech',
        },
        {
          id: 2,
          label: 'Experiencia',
          href: '#exp',
        },
        {
          id: 3,
          label: 'Proyectos',
          href: '#projets',
        },
        {
          id: 4,
          label: 'Sobre Mi',
          href: '#about-me',
        },
        {
          id: 5,
          label: 'Contacto',
          href: '#contact',
        },
      ],
      banner: {
        name: 'Hugo Quispe',
        degree: 'Ingeniero Civil en Computación e Informática',
        specialty: 'Desarrollador FrontEnd | UI',
        imageSrc: 'https://hugoquispe.cl/assets/img/hugo.png',
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
      technologiesTitle: 'Tecnologias',
      jobFunctionTitle: 'Funciones del cargo',
      experiences: [
        {
          id: 1,
          title: 'Desarrollador UI',
          project: 'BanConexión',
          description: 'Esta es una descripcion',
          jobFunctions: [],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'Cliente',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'Banco de Chile Logo',
          },
          employerTitle: 'Empleador',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: '3it Logo',
          },
        },
      ],
      educationTitle: 'Educacion',
      educations: [],
      footer: {
        leftSide: 'Portafolio Hugo Quispe',
        rightSide: '2022 - Proyecto Personal',
      },
    },
  },
  {
    languageLabel: 'EN',
    data: {
      labelShowMore: 'Show More',
      labelShowLess: 'Show Less',
      menu: [
        {
          id: 1,
          label: 'Technologies',
          href: '#tech',
        },
        {
          id: 2,
          label: 'Experience',
          href: '#exp',
        },
        {
          id: 3,
          label: 'Projects',
          href: '#projets',
        },
        {
          id: 4,
          label: 'About Me',
          href: '#about-me',
        },
        {
          id: 5,
          label: 'Contact',
          href: '#contact',
        },
      ],
      banner: {
        name: 'Hugo Quispe',
        degree: 'Civil Engineer in Computing and Informatics',
        specialty: 'FrontEnd | UI Developer',
        imageSrc: 'https://hugoquispe.cl/assets/img/hugo.png',
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
      technologiesTitle: 'Technologies',
      jobFunctionTitle: 'Funciones del cargo',
      experiences: [
        {
          id: 1,
          title: 'UI Developer',
          project: 'Project: BanConexión',
          description: 'Esta es una descripcion',
          jobFunctions: [
            'Mobile app UI development and maintenance using React Native.',
            'Debugging was done using Flipper, Android Emulator and Ios Emulator.',
            'Development of unit tests using Jest and Testing Library.',
          ],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'Client',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'Banco de Chile Logo',
          },
          employerTitle: 'Employer',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: '3it Logo',
          },
        },
        {
          id: 2,
          title: 'Java Developer',
          project: 'Project: Migration Liferay CGR',
          description: 'Esta es una descripcion',
          jobFunctions: [
            'Migration of portals from Liferay 6.2 to Liferay Dxp 7.3.',
            'Theme migration from Velocity to FreeMarker.',
            'Migration of Websites (HTML, CSS and JS) to Liferay themes.',
          ],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'Client',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'CGR Logo',
          },
          employerTitle: 'Employer',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: 'ValpoSystems Logo',
          },
        },
        {
          id: 3,
          title: 'Full Stack Developer',
          project: 'Project: Portal Prestadores',
          description: 'Esta es una descripcion',
          jobFunctions: [
            'User interface development using Angular and PrimeNG.',
            'HTTP requests to the backend using Angular.',
            'Backend development using Spring, Hibernate, Jboss and Camel.',
            'Development and maintenance of the database in Sql Server.',
          ],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'Client',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'ISL Logo',
          },
          employerTitle: 'Employer',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: 'ValpoSystems Logo',
          },
        },
        {
          id: 4,
          title: 'Thesis Student',
          project: 'Implementation of dashboards',
          description: 'Esta es una descripcion',
          jobFunctions: [],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'University',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'Universidad de Tarapaca Logo',
          },
          employerTitle: 'Employer',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: 'Codelco Logo',
          },
        },
        {
          id: 5,
          title: 'Full Stack Developer',
          project: 'Project: VendeComida',
          description: 'Esta es una descripcion',
          jobFunctions: [],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'Client',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'Banco de Chile Logo',
          },
          employerTitle: 'Employer',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: '3it Logo',
          },
        },
        {
          id: 6,
          title: 'Wordpress Developer',
          project: 'Projects: Ruta Digital',
          description: 'Esta es una descripcion',
          jobFunctions: [],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'Clients',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'Banco de Chile Logo',
          },
          employerTitle: 'Employer',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: '3it Logo',
          },
        },
        {
          id: 7,
          title: 'PHP Developer',
          project: 'Project: E-SEIA',
          description: 'Esta es una descripcion',
          jobFunctions: [],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'Client',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'Banco de Chile Logo',
          },
          employerTitle: 'Employer',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: '3it Logo',
          },
        },
      ],
      educationTitle: 'Educacion',
      educations: [
        {
          id: 1,
          university: 'Universidad de Tarapacá',
          description: 'Ing. Civil en Computación e Informática',
          imageSrc: 'https://hugoquispe.cl/assets/img/uta-logo.png',
          imageAlt: 'Uta Logo',
        },
        {
          id: 2,
          university: 'UNdeC',
          description: 'Estudiante Intercambio 2017',
          imageSrc: 'https://hugoquispe.cl/assets/img/undec-logo.png',
          imageAlt: 'UNdeC Logo',
        },
        {
          id: 3,
          university: 'UPDS',
          description: 'Estudiante Intercambio 2018',
          imageSrc: 'https://hugoquispe.cl/assets/img/upds-logo.png',
          imageAlt: 'UPDS Logo',
        },
        {
          id: 4,
          university: 'Universidad de Buenos Aires',
          description: 'ECI 2019',
          imageSrc: 'https://hugoquispe.cl/assets/img/uba-logo.png',
          imageAlt: 'UBA Logo',
        },
        {
          id: 5,
          university: 'Universidad de Medellín',
          description: 'Estudiante Intercambio 2020',
          imageSrc: 'https://hugoquispe.cl/assets/img/udem-logo.png',
          imageAlt: 'UDEM Logo',
        },
      ],
      footer: {
        leftSide: 'Portfolio Hugo Quispe',
        rightSide: '2022 - Personal Project',
      },
    },
  },
  {
    languageLabel: 'FR',
    data: {
      labelShowMore: 'Montre Plus',
      labelShowLess: 'Montrer Moins',
      menu: [
        {
          id: 1,
          label: 'Technologies',
          href: '#tech',
        },
        {
          id: 2,
          label: 'Vivre',
          href: '#exp',
        },
        {
          id: 3,
          label: 'Projets',
          href: '#projets',
        },
        {
          id: 4,
          label: 'À propos de moi',
          href: '#about-me',
        },
        {
          id: 5,
          label: 'Contact',
          href: '#contact',
        },
      ],
      banner: {
        name: 'Hugo Quispe',
        degree: 'Ingénieur civil en informatique et informatique',
        specialty: 'FrontEnd | UI Developer',
        imageSrc: 'https://hugoquispe.cl/assets/img/hugo.png',
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
      technologiesTitle: 'Les technologies',
      jobFunctionTitle: 'Funciones del cargo',
      experiences: [
        {
          id: 1,
          title: 'Developer',
          project: 'BanConexión',
          description: 'Esta es una descripcion',
          jobFunctions: [],
          technologies: [
            {
              id: 1,
              logoSrc: 'https://image.pngaaa.com/11/2508011-middle.png',
              logoAlt: 'React Logo',
            },
          ],
          clientTitle: 'Client',
          client: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcrJyO-Awi_Z3dgHm0jHJYMmCX4pEykaMIfqLx6rJRA&s',
            logoAlt: 'Banco de Chile Logo',
          },
          employerTitle: 'Employeur',
          employer: {
            id: 1,
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0ajuar8CEBVaPQ5O5n_YtQPPILknZrZq_TTTQXU0Vg&s',
            logoAlt: '3it Logo',
          },
        },
      ],
      educationTitle: 'Educacion',
      educations: [],
      footer: {
        leftSide: 'Portefeuille Hugo Quispe',
        rightSide: '2022 - Projet personnel',
      },
    },
  },
];

export default languageData;
