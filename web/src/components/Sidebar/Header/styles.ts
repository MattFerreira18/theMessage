import styled from 'styled-components';

import { COLORS } from '../../../styles/COLORS';

export const Wrapper = styled.div`
  padding: 2rem 0.8rem 1.4rem;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid ${COLORS.GRAY_800};

  div {
    width: 100%;

    display: flex;

    margin-top: 1rem;
  }

  input {
    width: 80%;
    height: 40px;

    margin-right: 2rem;
    padding: 0.6rem;

    border-radius: 1rem;
    border: 1px solid ${COLORS.GRAY_400};

    background: ${COLORS.GRAY_800};
    color: ${COLORS.GRAY_100};

    &:focus {
      border: 1px solid ${COLORS.ORANGE_500};
    }
  }

  button {
    background: ${COLORS.GRAY_800};
    color: ${COLORS.GRAY_100};

    height: 40px;
    width: 40px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;

    &:hover {
      background-color: ${COLORS.ORANGE_500};
    }
  }
`;
