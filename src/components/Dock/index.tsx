import { ContactItem } from '../../models/data';
import DockProps, { defaultDockProps } from './props';
import { dockStyle, getIconStyle } from './style';

const Dock = (props:DockProps) => {
  const { className, items } = { ...defaultDockProps, ...props };

  const onPress = (item:ContactItem) => {
    if (item.isNewTab) {
      window.open(item.url, '_blank');
    } else {
      window.open(item.url);
    }
  };

  const renderDockItems = items ? items.map(
    (item:ContactItem) => (
      <div key={item.id} onClick={() => onPress(item)} aria-hidden="true">
        <i className={getIconStyle(item.icon)} />
      </div>
    ),
  ) : null;
  return (
    <div className={dockStyle.concat(className || '')}>
      { renderDockItems }
    </div>
  );
};

export default Dock;
