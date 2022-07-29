import { Banner } from "../../models/data";

interface BannerProps {
  data: Banner,
  id: string,
};

const defaultBannerProps:BannerProps = {
  data: {
    name: '',
    degree: '',
    specialty: '',
    imageSrc: '',
  },
  id: ''
};

export default BannerProps;
export { defaultBannerProps };