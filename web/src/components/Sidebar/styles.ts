import styled from 'styled-components';

import { COLORS } from '../../styles/COLORS';

export const Wrapper = styled.div`
  background: ${COLORS.GRAY_700};

  width: 36rem;
  max-width: 420px;

  overflow-y: scroll;
  overflow-x: hidden;
`;
