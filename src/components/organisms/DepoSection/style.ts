import { device } from '@/styles/theme';
import styled from 'styled-components';

export const ContainerDepo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 2rem;

  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media ${device.desktopM} {
    max-width: none;
    padding: 4rem 0;
  }

  @media ${device.mobileL} {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  h2 {
    font-size: ${props => props.theme.fontSizes.xxl};
    font-weight: 600;
    line-height: 120%;
    color: ${props => props.theme.colors.black[200]};

    @media ${device.desktopM} {
      padding: 0 2rem;
    }

    @media ${device.desktopS} {
      padding: 0 1rem;
    }

    @media ${device.tablet} {
      font-size: ${props => props.theme.fontSizes.xl};
    }
  }

  a {
    width: max-content;
    margin: 0 auto;
  }
`;

export const ContainerSlider = styled.div`
  .swiper {
    padding: 0.25rem;
    padding-bottom: 0.75rem;
  }

  .swiper-slide {
    width: max-content !important;
    padding-left: 2rem;
  }

  .swiper-slide:first-child {
    padding-left: 0;
  }

  .swiper-slide:last-child {
    padding-right: 1rem;
  }

  @media ${device.desktopM} {
    .swiper-slide {
      padding-left: 1.5rem;
    }

    .swiper-slide:first-child {
      padding-left: 2rem;
    }
  }

  @media ${device.desktopS} {
    .swiper-slide:first-child {
      padding-left: 1rem;
    }
  }
`;
