import { useEffect, useState } from 'react';
import { MenuItem } from '../../models/data';
import Button from '../Button';
import SidebarProps, { defaultSidebarProps } from './props';
import {
  sidebarStyle,
  getSpaceStyle,
  getMenuContainerStyle,
  topMenuStyle,
  menuStyle,
  itemMenuStyle,
} from './style';

const Sidebar = (props:SidebarProps) => {
  const { visible, menuItems, onHide } = { ...defaultSidebarProps, ...props };
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleAnimation, setIsVisibleAnimation] = useState(false);
  useEffect(() => {
    if (!isVisible && visible) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisibleAnimation(true);
      }, 50);
    } else if (isVisible && !visible) {
      setIsVisibleAnimation(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }
  }, [visible]);

  const renderMenuItems = menuItems ? menuItems.map(
    (item:MenuItem) => (
      <a key={item.id} href={item.href} className={itemMenuStyle} onClick={onHide} aria-hidden="true">{item.label}</a>
    ),
  ) : null;

  return (
    isVisible ? (
      <div className={sidebarStyle}>
        <div className={getSpaceStyle(isVisibleAnimation)} onClick={onHide} aria-hidden="true" />
        <div className={getMenuContainerStyle(isVisibleAnimation)}>
          <div className={topMenuStyle}>
            <Button cancel onPress={onHide} />
          </div>
          <div className={menuStyle}>
            { renderMenuItems }
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Sidebar;
