import styled from 'styled-components';

export const EmptyWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1480px;
  height: 100%;

  margin-top: 5rem;

  padding: 0 2rem;

  /* z-index: 10; */
  overflow-y: scroll;
`;
