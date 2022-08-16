import { useState, useEffect } from 'react';
import IdScroll from '../../components/IdScroll';
import BannerProps, { defaultBannerProps } from './props';
import {
  bannerStyle,
  bannerContainerStyle,
  titleContainerStyle,
  getNameStyle,
  getDegreeStyle,
  getSpecialtyStyle,
  imageContainerStyle,
  getImageStyle,
} from './style';

const Banner = (props:BannerProps) => {
  const { data, id } = { ...defaultBannerProps, ...props };
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsStart(true);
    }, 100);
  }, []);

  return (
    <section className={bannerStyle}>
      <IdScroll id={id} />
      <div className={bannerContainerStyle}>
        <div className={titleContainerStyle}>
          <h1 className={getNameStyle(isStart)}>{data.name}</h1>
          <h3 className={getDegreeStyle(isStart)}>{data.degree}</h3>
          <h3 className={getSpecialtyStyle(isStart)}>{data.specialty}</h3>
        </div>
        <div className={imageContainerStyle}>
          <img className={getImageStyle(isStart)} src={data.imageSrc} alt={data.imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
