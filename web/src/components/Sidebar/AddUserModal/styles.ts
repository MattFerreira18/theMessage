import styled from 'styled-components';

import { COLORS } from '../../../styles/COLORS';

export const Wrapper = styled.div`
  background: rgba(25, 25, 25, 80%);

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: ${COLORS.GRAY_700};

  border-radius: 8px;
  padding: 2rem;

  min-width: 30rem;
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;

  height: 80%;
  margin-top: 2rem;

  button {
    background: ${COLORS.GRAY_800};
    color: ${COLORS.GRAY_100};

    height: 50px;
    width: 50px;
    border-radius: 50%;

    margin-left: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.2rem;

    &:hover {
      background-color: ${COLORS.ORANGE_500};
    }
  }
`;

export const InputWrapper = styled.div`
  width: 80%;
  height: 50px;

  font-size: 1.2rem;

  display: flex;

  border-radius: 1rem;
  border: 1px solid ${COLORS.GRAY_400};

  background: ${COLORS.GRAY_800};
  color: ${COLORS.GRAY_100};

  &:focus-within {
    border: 1px solid ${COLORS.ORANGE_500};
  }

  div {
    background: ${COLORS.GRAY_700};
    height: 100%;
    border-radius: 1rem 0 0 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 0.6rem;
  }

  input {
    height: 100%;
    width: 100%;
    border-radius: 0 1rem 1rem 0;

    padding: 0.6rem;

    color: ${COLORS.GRAY_100};

    background: none;
    border: none;
  }
`;
