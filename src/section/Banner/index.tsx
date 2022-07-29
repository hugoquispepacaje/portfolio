import { useState, useEffect } from 'react';
import BannerProps, { defaultBannerProps } from './props';
import { bannerStyle, bannerContainerStyle, titleContainerStyle, getNameStyle, getDegreeStyle, getSpecialtyStyle, imageContainerStyle, getImageStyle } from './style';

const Banner = ( props:BannerProps ) => {
  props = { ...defaultBannerProps, ...props };
  const [isStart, setIsStart] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setIsStart(true);
    },100)
  },[]);

  return (
    <div id={props.id} className={bannerStyle}>
      <div className={bannerContainerStyle}>
        <div className={titleContainerStyle}>
          <h1 className={getNameStyle(isStart)}>{props.data.name}</h1>
          <h3 className={getDegreeStyle(isStart)}>{props.data.degree}</h3>
          <h3 className={getSpecialtyStyle(isStart)}>{props.data.specialty}</h3>
        </div>
        <div className={imageContainerStyle}>
          <img className={getImageStyle(isStart)} src={props.data.imageSrc} />
        </div>
      </div>
    </div>
  )
}

export default Banner;