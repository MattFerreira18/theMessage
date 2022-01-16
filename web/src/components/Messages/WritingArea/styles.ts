import styled from 'styled-components';

import { COLORS } from '../../../styles/COLORS';

export const Wrapper = styled.div`
  width: 100%;

  padding: 1rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${COLORS.GRAY_700};

  input {
    border-radius: 1rem;
    font-size: 1rem;

    min-height: 50px;
    max-height: 20rem;
    width: 50%;

    resize: none;
    overflow: hidden;

    margin-right: 1rem;
    padding: 0.6rem;

    border: 1px solid ${COLORS.GRAY_700};
    color: ${COLORS.GRAY_100};
    background: ${COLORS.GRAY_800};

    &:focus {
      border: 1px solid ${COLORS.ORANGE_500};
    }
  }

  button {
    background: ${COLORS.GREEN_500};
    border-radius: 50%;

    font-size: 1.2rem;
    color: ${COLORS.WHITE};

    height: 40px;
    width: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.8;
    }
  }
`;
