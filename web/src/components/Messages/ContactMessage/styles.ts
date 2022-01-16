import styled from 'styled-components';

import { COLORS } from '../../../styles/COLORS';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  &:first-child {
    margin-top: 2.4rem;
  }

  &:last-child {
    margin-bottom: 4rem;
  }

  &:not(:first-child) {
    margin-top: 1rem;
  }

  div {
    min-height: 2rem;
    max-width: 32rem;

    color: ${COLORS.WHITE};

    padding: 1rem;
    border-radius: 8px;
    background: ${COLORS.PURPLE_500};
  }
`;
