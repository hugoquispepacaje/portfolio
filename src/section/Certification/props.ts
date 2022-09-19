import { ModalSimpleItem } from '../../models/data';

interface CertificationProps {
  id: string;
  certificationTitle: string;
  certifications: ModalSimpleItem[];
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
