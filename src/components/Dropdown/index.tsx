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

const Dropdown = ( props:DropdownProps ) => {
  props = { ...defaultDropdownProps, ...props };
  const [ isActive, setIsActive ] = useState(false);

  const onChange = (value:Language) => {
    if(value.id !== props.value?.id){
      props.setValue(value);
    }
    setIsActive(!isActive);
  }

  const renderOptions = props.options.map((option)=>{
    return(
      <button className={buttonDropdownStyle} key={option.id} onClick={()=>onChange(option)}>
        <img className={flagStyle} src={option.imageSrc} />
        {option.label}
      </button>
    )
  });

  return (
    <div className="relative inline-block text-left">
      <div>
        <button type="button" className={buttonStyle} onClick={()=>setIsActive(!isActive)}>
        <img className={flagStyle} src={props.value?.imageSrc} />
          { props.value?.label }
          <span className={shevronStyle.concat(isActive ? shevronUpStyle : shervronDownStyle)}></span>
        </button>
      </div>
      { isActive && 
        (<div className={dropdownStyle}>
          <div className={dropdownContainerStyle}>
            { renderOptions }
          </div>
        </div>)
      }
    </div>
  )
}

export default Dropdown;