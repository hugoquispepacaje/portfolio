import { ContactItem } from '../../models/data';
import DockProps, { defaultDockProps } from './props';
import { dockStyle, getIconStyle } from './style';

const Dock = ( props:DockProps ) => {
  props = { ...defaultDockProps, ...props };

  const onPress = (item:ContactItem) => {
    if(item.isNewTab){
      window.open(item.url, "_blank");
    }
    else{
      window.open(item.url);
    }
  }

  const dockItems = props.items ? props.items.map(
    (item:ContactItem)=>(
      <i key={item.id} className={getIconStyle(item.icon)} onClick={() => onPress(item)}></i>
    )
  ) : null;
  return (
    <div className={dockStyle.concat(props.className || '')}>
      { dockItems }
    </div>
  )
}

export default Dock;