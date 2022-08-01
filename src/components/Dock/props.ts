import { ContactItem } from '../../models/data';

interface DockProps {
  className?: string;
  items: ContactItem[];
}

const defaultDockProps:DockProps = {
  className: '',
  items: [],
};

export default DockProps;
export { defaultDockProps };
