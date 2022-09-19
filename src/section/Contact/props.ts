import { ContactItem } from '../../models/data';

interface ContactProps {
  id: string;
  contactTitle: string;
  contactSubtitle: string;
  contactItems: ContactItem[];
}

const defaultContactProps:ContactProps = {
  id: '',
  contactTitle: '',
  contactSubtitle: '',
  contactItems: [],
};

export default ContactProps;
export { defaultContactProps };
