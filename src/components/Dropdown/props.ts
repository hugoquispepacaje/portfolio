import Language from '../../models/language';

interface DropdownProps {
  value?: Language,
  setValue: (value:Language) => void;
  options: Language[];
}

const defaultDropdownProps:DropdownProps = {
  value: {
    id: 0,
    label: '',
    imageSrc: '',
  },
  setValue: () => null,
  options: [],
};

export default DropdownProps;
export { defaultDropdownProps };
