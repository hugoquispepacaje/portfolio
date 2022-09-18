interface MenuItem {
  id?: number;
  label?: string;
  href?: string;
}

interface Banner {
  name: string;
  degree: string;
  specialty: string;
  imageSrc: string;
  imageAlt: string;
}

interface ContactItem {
  id: number;
  icon: string;
  url: string;
  isNewTab: boolean;
}

interface Logo {
  id: number;
  logoSrc: string;
  logoAlt: string;
}

interface ExperienceItem {
  id: number;
  title: string;
  project: string;
  technologies: Logo[];
  clientTitle: string;
  client: Logo;
  employerTitle: string;
  employer: Logo;
  description?: string;
  jobFunctions?: string[];
}

interface Data {
  labelShowMore: string;
  labelShowLess: string;
  menu: MenuItem[];
  banner: Banner;
  contact: ContactItem[];
  experienceTitle: string;
  experiences: ExperienceItem[];
  technologiesTitle: string;
  jobFunctionTitle: string;
}

interface LanguageData {
  languageLabel: string,
  data: Data;
}

export {
  type Data,
  type MenuItem,
  type Banner,
  type ContactItem,
  type Logo,
  type ExperienceItem,
};

export default LanguageData;
