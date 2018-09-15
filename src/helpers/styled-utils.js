// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

// iterate through the sizes and create a media template
export const media = {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  forPhoneOnly: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)};
    }
  `,
  forTabletPortraitAndUp: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  forTabletLandscapeAndUp: (...args) => css`
    @media (min-width: 960px) {
      ${css(...args)};
    }
  `,
  forDesktopAndUp: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)};
    }
  `,
  forBigDesktopAndUp: (...args) => css`
    @media (min-width: 1800px) {
      ${css(...args)};
    }
  `
};
