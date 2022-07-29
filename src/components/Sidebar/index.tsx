import { useEffect, useState } from 'react';
import { MenuItem } from '../../models/data';
import Button from '../Button';
import SidebarProps, { defaultSidebarProps } from './props';
import { sidebarStyle, getSpaceStyle, getMenuContainerStyle, topMenuStyle, menuStyle, itemMenuStyle } from './style';

const Sidebar = ( props:SidebarProps ) => {
  props = { ...defaultSidebarProps, ...props };
  const [ isVisible, setIsVisible ] = useState(false);
  const [ isVisibleAnimation, setIsVisibleAnimation ] = useState(false);
  
  useEffect(() => {
    if( !isVisible && props.visible) {
      setIsVisible(true);
      setTimeout(()=>{
        setIsVisibleAnimation(true);
      }, 50);
    } else if( isVisible && !props.visible) {
      setIsVisibleAnimation(false);
      setTimeout(()=>{
        setIsVisible(false);
      }, 500);
    }
  },[props.visible]);

  const menuItems = props.menuItems ? props.menuItems.map(
    (item:MenuItem)=>(
      <a key={item.id} href={item.href} className={itemMenuStyle} onClick={props.onHide}>{item.label}</a>
    )
  ) : null;

  return (
    isVisible ? (
      <div className={sidebarStyle}>
        <div className={getSpaceStyle(isVisibleAnimation)} onClick={props.onHide}></div>
        <div className={getMenuContainerStyle(isVisibleAnimation)}>
          <div className={topMenuStyle}>
            <Button cancel onPress={props.onHide} />
          </div>
          <div className={menuStyle}>
            { menuItems }
          </div>
        </div>
      </div>
    ) : null
  )
}

export default Sidebar;