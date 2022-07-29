import LanguageData from "../models/data";

const languageData:LanguageData[] = [
  {
    languageLabel: 'ES',
    data: {
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
      },
      contact: [
        {
          id: 1,
          icon: 'pi pi-whatsapp',
          url: 'https://api.whatsapp.com/send?phone=+56983499427&text=Hola!!!%0AEstaba viendo tu portafolio y me gustaria trabajar contigo.',
          isNewTab: true
        },
        {
          id: 2,
          icon: 'pi pi-envelope',
          url: 'mailto:hugo.quispe96@outlook.el',
          isNewTab: false
        },
        {
          id: 3,
          icon: 'pi pi-linkedin',
          url: 'https://www.linkedin.com/in/hugo-quispe-pacaje-71b1b6119/',
          isNewTab: true
        },
      ],
    }
  },
  {
    languageLabel: 'EN',
    data: {
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
      },
      contact: [
        {
          id: 1,
          icon: 'pi pi-whatsapp',
          url: 'https://api.whatsapp.com/send?phone=+56983499427&text=Hello!!!%0AI was looking at your portfolio and would like to work with you.',
          isNewTab: true
        },
        {
          id: 2,
          icon: 'pi pi-envelope',
          url: 'mailto:hugo.quispe96@outlook.el',
          isNewTab: false
        },
        {
          id: 3,
          icon: 'pi pi-linkedin',
          url: 'https://www.linkedin.com/in/hugo-quispe-pacaje-71b1b6119/',
          isNewTab: true
        },
      ],
    }
  },
  {
    languageLabel: 'FR',
    data: {
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
      },
      contact: [
        {
          id: 1,
          icon: 'pi pi-whatsapp',
          url: `https://api.whatsapp.com/send?phone=+56983499427&text=Bonjour!!!%0Aje regardais votre portfolio et j'aimerais travailler avec vous.`,
          isNewTab: true
        },
        {
          id: 2,
          icon: 'pi pi-envelope',
          url: 'mailto:hugo.quispe96@outlook.el',
          isNewTab: false
        },
        {
          id: 3,
          icon: 'pi pi-linkedin',
          url: 'https://www.linkedin.com/in/hugo-quispe-pacaje-71b1b6119/',
          isNewTab: true
        },
      ],
    }
  },
];

export default languageData;