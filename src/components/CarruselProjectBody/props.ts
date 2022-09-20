import { Logo } from '../../models/data';

interface CarruselProjectBodyProps {
  titleProject: string;
  logo: Logo;
  labelShowMore: string;
  onClickShowMore: () => void;
}

export default CarruselProjectBodyProps;
