import React from 'react';
import DeepGreenBanner from './DeepGreenBanner';

import HKEJImg from '../../assets/img/media-attention/HKEJ-1200px.webp';
import TechcrunchImg from '../../assets/img/media-attention/techcrunch-logo.webp';
import SCMPImg from '../../assets/img/media-attention/SCMP_logo.webp';
import TechNasiaImg from '../../assets/img/media-attention/techinasia-logo.webp';
import MingpaoImg from '../../assets/img/media-attention/media_mingpao.webp';
import Kr36Img from '../../assets/img/media-attention/media-36kr.webp';

const MediaAttention = () => {
  const images = [
    { src: HKEJImg, alt: 'HKEJImg', width: '135px', height: '60px' },
    {
      src: TechcrunchImg,
      alt: 'TechcrunchImg',
      width: '198px',
      height: '84px',
    },
    { src: SCMPImg, alt: 'SCMPImg', width: '99px', height: '99px' },
    { src: TechNasiaImg, alt: 'TechNasiaImg', width: '198px', height: '36px' },
    { src: MingpaoImg, alt: 'MingpaoImg', width: '105px', height: '60px' },
    { src: Kr36Img, alt: 'Kr36Img', width: '81px', height: '42px' },
  ];
  return (
    <DeepGreenBanner
      images={images}
      title="Media Attention"
      gap="20px"
      paddingBottom="50px"
    ></DeepGreenBanner>
  );
};

export default MediaAttention;
