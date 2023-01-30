import React from 'react';
import Image from 'next/image';

import HomeBannerBg from 'common/assets/home/banner-bg.png';
import HomeBannerPhoto from 'common/assets/home/banner-photo.png';
import { Container } from 'common/styles/container';
import BannerTitleEffect from 'common/assets/home/banner-title-effect.png';
import { FormSearch } from 'components/Home/FormSearch';
import { ContainerBanner, ContainerBannerImageBg } from './styles';

export const Banner: React.FC = () => {
  return (
    <ContainerBanner>
      <ContainerBannerImageBg src={HomeBannerBg.src} alt="imagem de fundo do Banner" />
      <Container>
        <div className="banne_photo">
          <Image src={HomeBannerPhoto.src} alt="Retrato de uma Pessoa" width={HomeBannerPhoto.width} height={HomeBannerPhoto.height} />
        </div>
        <div className="banner_content">
          <h1 className="title">Descubra e agende profissionais de várias áreas bem perto de você</h1>
          <img src={BannerTitleEffect.src} alt="Efeito visual" />
          <p className="great color_light">
            Usada por pessoas que procuram deixar as coisas mais simples.
          </p>
          <div className="form_search">
            <FormSearch />
          </div>
        </div>
      </Container>
    </ContainerBanner>
  );
};
