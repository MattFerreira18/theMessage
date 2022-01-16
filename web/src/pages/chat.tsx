import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import { Messages } from '../components/Messages';
import { Sidebar } from '../components/Sidebar';
import { isMobileDevice } from '../utils/isMobileDevice';

type ChatPageProps = {
  user: {
    name: string;
    email: string;
    nickname: string;
    image: string;
  };
};

export default function ChatPage({ user }: ChatPageProps) {
  const router = useRouter();
  const { name, email, nickname, image } = user;

  useEffect(() => {
    if (isMobileDevice()) {
      router.push('/unsupported');
    }
  }, [router]);

  return (
    <Container>
      <Sidebar />
      <Messages />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100vh;
`;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const { name, email, image } = session.user;

  const user = {
    name,
    email,
    nickname: email,
    image,
  };

  return {
    props: {
      user,
    },
  };
};
