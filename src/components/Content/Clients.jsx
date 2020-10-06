import React from 'react';
import BauhausImg from '../../assets/img/client_bauhaus.webp';
import EvisuImg from '../../assets/img/client-Evisu-L.webp';
import ClarkImg from '../../assets/img/client_store-clarks.webp';
import LululemonImg from '../../assets/img/client_lululemon.webp';
import LifungImg from '../../assets/img/client_lifung logo.webp';
import GPBatteryImg from '../../assets/img/client_batteries_lo.webp';

import DeepGreenBanner from './DeepGreenBanner';
const Clients = () => {
  const images = [
    { src: BauhausImg, alt: 'BauhausImg' },
    { src: EvisuImg, alt: 'EvisuImg' },
    { src: ClarkImg, alt: 'ClarkImg' },
    { src: LululemonImg, alt: 'LululemonImg' },
    { src: LifungImg, alt: 'LifungImg' },
    { src: GPBatteryImg, alt: 'GPBatteryImg' },
  ];
  return <DeepGreenBanner images={images} title="Clients" />;
};

export default Clients;
