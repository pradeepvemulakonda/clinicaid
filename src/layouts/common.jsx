import styled from 'styled-components';
import { Well } from 'react-bootstrap';
import { media } from '../helpers/styled-utils';

export const Container = styled(Well)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1em;
`;

export const Backdrop = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  ${media.forTabletLandscapeAndUp`
    max-width: 744px;
  `};

  ${media.forTabletPortraitAndUp`
    max-width: 930px;
  `};

  ${media.forDesktopAndUp`
    max-width: 1080px;
  `};
`;

export const HR = styled.hr`
  margin-top: 12px;
  border: none;
`;

export const Form = styled.form`
  width: 100%;
`;
