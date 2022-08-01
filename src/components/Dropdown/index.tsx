import { useState } from 'react';
import DropdownProps, { defaultDropdownProps } from './props';
import Language from '../../models/language';
import {
  buttonStyle,
  shevronStyle,
  shevronUpStyle,
  shervronDownStyle,
  flagStyle,
  dropdownStyle,
  dropdownContainerStyle,
  buttonDropdownStyle,
} from './style';

const Dropdown = (props:DropdownProps) => {
  const { value, setValue, options } = { ...defaultDropdownProps, ...props };
  const [isActive, setIsActive] = useState(false);

  const onChange = (newValue:Language) => {
    if (newValue.id !== value?.id) {
      setValue(newValue);
    }
    setIsActive(!isActive);
  };

  const renderOptions = options.map((option) => (
    <button type="button" className={buttonDropdownStyle} key={option.id} onClick={() => onChange(option)}>
      <img className={flagStyle} src={option.imageSrc} alt={option.imageAlt} />
      {option.label}
    </button>
  ));

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className={buttonStyle} onClick={() => setIsActive(!isActive)}>
          <img className={flagStyle} src={value?.imageSrc} alt={value?.imageAlt} />
          { value?.label }
          <span className={shevronStyle.concat(isActive ? shevronUpStyle : shervronDownStyle)} />
        </button>
      </div>
      { isActive
        && (
          <div className={dropdownStyle}>
            <div className={dropdownContainerStyle}>
              { renderOptions }
            </div>
          </div>
        )}
    </div>
  );
};

export default Dropdown;
