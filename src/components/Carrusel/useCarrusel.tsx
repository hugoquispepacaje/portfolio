import { useState, useEffect } from 'react';

const useCarrusel = (itemsContent: JSX.Element[], numItems:number) => {
  const [items, setItems] = useState<JSX.Element[]>([]);
  const [firstPosition, setFirstPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(0);

  useEffect(() => {
    setFirstPosition(1);
    if (itemsContent.length <= numItems) {
      setItems(itemsContent);
      setLastPosition(itemsContent.length);
    } else {
      setItems(itemsContent.slice(0, numItems));
      setLastPosition(numItems);
    }
  }, [numItems, itemsContent]);

  const onClickLeftButton = () => {
    if (itemsContent.length <= numItems) return;
    const newFirstPosition:number = firstPosition === 1
      ? itemsContent.length : firstPosition - 1;
    const newLastPosition:number = lastPosition === 1
      ? itemsContent.length : lastPosition - 1;
    switch (numItems) {
      case 1:
        setItems([itemsContent[newFirstPosition - 1]]);
        break;
      case 2:
        setItems([
          itemsContent[newFirstPosition - 1],
          items[0],
        ]);
        break;
      case 3:
        setItems([
          itemsContent[newFirstPosition - 1],
          items[0],
          items[1],
        ]);
        break;
      default:
        setItems([
          itemsContent[newFirstPosition - 1],
          items[0],
          items[1],
        ]);
    }
    setFirstPosition(newFirstPosition);
    setLastPosition(newLastPosition);
  };

  const onClickRightButton = () => {
    if (itemsContent.length <= numItems) return;
    const newFirstPosition:number = firstPosition === itemsContent.length
      ? 1 : firstPosition + 1;
    const newLastPosition:number = lastPosition === itemsContent.length
      ? 1 : lastPosition + 1;
    switch (numItems) {
      case 1:
        setItems([itemsContent[newLastPosition - 1]]);
        break;
      case 2:
        setItems([
          items[1],
          itemsContent[newLastPosition - 1],
        ]);
        break;
      case 3:
        setItems([
          items[1],
          items[2],
          itemsContent[newLastPosition - 1],
        ]);
        break;
      default:
        setItems([
          items[1],
          items[2],
          itemsContent[newLastPosition - 1],
        ]);
    }
    setFirstPosition(newFirstPosition);
    setLastPosition(newLastPosition);
  };
  return {
    items,
    onClickRightButton,
    onClickLeftButton,
  };
};

export default useCarrusel;
