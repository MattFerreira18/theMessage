import styled from 'styled-components';

import { COLORS } from '../../../styles/COLORS';

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  padding-left: 356px;

  z-index: -1;

  background: ${COLORS.GRAY_700};

  div {
    padding: 0.4rem 1rem;
    padding-left: 6rem;

    display: flex;
    align-items: center;

    span {
      margin-left: 1rem;
      font-weight: 700;
      font-size: 1.2rem;
    }

    img {
      border-radius: 50%;
    }
  }
`;
