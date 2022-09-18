import { screenBreak } from './constants';

const needShowMore = (cantItems:number) => {
  switch (window.innerWidth) {
    case screenBreak.sm:
      return cantItems > 1;
    case screenBreak.md:
    case screenBreak.lg:
    case screenBreak.xl:
      return cantItems > 2;
    case screenBreak.xxl:
      return cantItems > 3;
    default:
      return cantItems > 1;
  }
};

const getNumItemsForCarrusel = (widthScreen:number) => {
  switch (true) {
    case widthScreen < screenBreak.sm:
      return 1;
    case widthScreen < screenBreak.lg:
      return 2;
    case widthScreen >= screenBreak.lg:
      return 3;
    default:
      return 1;
  }
};

export { needShowMore, getNumItemsForCarrusel };
