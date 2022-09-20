import { CarruselSimpleItem } from '../../models/data';

interface CertificationProps {
  id: string;
  certificationTitle: string;
  certifications: CarruselSimpleItem[];
  widthScreen: number;
}

const defaultCertificationProps:CertificationProps = {
  id: '',
  certificationTitle: '',
  certifications: [],
  widthScreen: 0,
};

export default CertificationProps;
export { defaultCertificationProps };
