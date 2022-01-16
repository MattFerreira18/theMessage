import styled from 'styled-components';

import { COLORS } from '../../styles/COLORS';

export const Wrapper = styled.button`
  border-bottom: 1px solid ${COLORS.GRAY_800};
  background: ${COLORS.GRAY_700};
  color: ${COLORS.GRAY_100};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.8rem;
  height: 5.4rem;
  width: 100%;

  img {
    border-radius: 50%;
  }

  & > div {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: ${COLORS.ORANGE_500};
  }

  &.active {
    background: ${COLORS.ORANGE_500};

    .message_counter {
      background: ${COLORS.ORANGE_600};
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  padding: 0.2rem 0;
  margin-left: 1rem;

  span {
    font-size: 1.1rem;
    font-weight: bold;
    color: ${COLORS.WHITE};
  }

  p {
    font-size: 0.9rem;
    text-align: start;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  flex-direction: column;

  height: 100%;

  padding: 0.2rem 0;

  & > div {
    background: ${COLORS.GRAY_400};
    border-radius: 50%;

    /* height: 1.4rem;
    width: 1.4rem; */
    padding: 0.2rem 0.286rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 0.9rem;
  }
`;
