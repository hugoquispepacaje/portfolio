import { getNumItemsForCarrusel } from '../../helpers/functions';
import Button from '../Button';
import CarruselProps from './props';
import { carruselContainerStyle, itemsContainerStyle } from './style';
import useCarrusel from './useCarrusel';

const Carrusel = (props:CarruselProps) => {
  const { widthScreen, itemsContent } = props;
  const {
    items,
    onClickRightButton,
    onClickLeftButton,
  } = useCarrusel(itemsContent, getNumItemsForCarrusel(widthScreen));
  return (
    <div className={carruselContainerStyle}>
      <Button icon="pi pi-angle-left" onPress={() => onClickLeftButton()} />
      <div className={itemsContainerStyle}>
        {items}
      </div>
      <Button icon="pi pi-angle-right" onPress={() => onClickRightButton()} />
    </div>
  );
};

export default Carrusel;
