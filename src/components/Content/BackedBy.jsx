import React from 'react';

import DeepGreenBanner from './DeepGreenBanner';

import CombinatorImg from '../../assets/img/backed-by/combinator_tr.webp';
import HKSTPImg from '../../assets/img/backed-by/scipark.webp';
import CyberportImg from '../../assets/img/backed-by/cyberport.webp';
import StadiumImg from '../../assets/img/backed-by/TSS.webp';
import AppWorksImg from '../../assets/img/backed-by/appworks .webp';
import KRspaceImg from '../../assets/img/backed-by/krspace.webp';

const BackedBy = () => {
  const images = [
    { src: CombinatorImg, alt: 'CombinatorImg' },
    { src: HKSTPImg, alt: 'HKSTPImg' },
    { src: CyberportImg, alt: 'CyberportImg' },
    { src: StadiumImg, alt: 'StadiumImg' },
    { src: AppWorksImg, alt: 'AppWorksImg' },
    { src: KRspaceImg, alt: 'KRspaceImg' },
  ];
  return (
    <DeepGreenBanner images={images} title="Backed By" paddingBottom="30px" />
  );
};

export default BackedBy;
