import React from 'react';
import styled from 'styled-components';

import { Logo } from '../components/Logo';
import { COLORS } from '../styles/COLORS';

export default function UnsupportedDevice() {
  return (
    <Container>
      <Logo />
      <span>This device is not supported</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100vh;

  span {
    color: ${COLORS.GRAY_100};
  }
`;
