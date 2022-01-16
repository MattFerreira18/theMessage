import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { IoLogoGithub } from 'react-icons/io5';

import { COLORS } from '../styles/COLORS';

export default function Login(): JSX.Element {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    router.push('/chat');
  }

  function handleGithubLogin() {
    signIn('github');
    router.push('/chat');

    return;
  }

  return (
    <Container>
      <Content>
        <h2>Login</h2>

        <hr />

        <span>select an method to realize the login in the platform</span>

        <div>
          <button onClick={handleGithubLogin}>
            <IoLogoGithub />
            Github
          </button>
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: ${COLORS.GRAY_700};
  border-radius: 8px;

  width: 24rem;
  padding: 1rem;

  div {
    margin-top: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 4px;
      width: 12rem;

      margin: 0 auto;
      padding: 0.8rem 1rem;

      font-size: 1.2rem;
      color: ${COLORS.GRAY_100};

      background: ${COLORS.GRAY_800};

      &:not(:last-child) {
        margin-bottom: 1rem;
      }

      &:hover {
        opacity: 0.8;
      }

      svg {
        height: 1.4rem;
        width: 1.4rem;
        margin-right: 0.4rem;
      }
    }
  }
`;
