import { Banner } from '../../models/data';

interface BannerProps {
  data: Banner,
  id: string,
}

const defaultBannerProps:BannerProps = {
  data: {
    name: '',
    degree: '',
    specialty: '',
    imageSrc: '',
    imageAlt: '',
  },
  id: '',
};

export default BannerProps;
export { defaultBannerProps };
