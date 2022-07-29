interface LanguageData {
  languageLabel: string,
  data: Data;
}

interface Data {
  menu: MenuItem[];
  banner: Banner;
  contact: ContactItem[];
};

interface MenuItem {
  id?: number;
  label?: string;
  href?: string;
};

interface Banner {
  name: string;
  degree: string;
  specialty: string;
  imageSrc: string;
}

interface ContactItem {
  id: number;
  icon: string;
  url: string;
  isNewTab: boolean;
}

export {
  type Data,
  type MenuItem,
  type Banner,
  type ContactItem,
}

export default LanguageData;