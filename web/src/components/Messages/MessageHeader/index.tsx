import Image from 'next/image';
import React from 'react';

import { Wrapper } from './styles';

type MessageHeaderProps = {
  user: {
    image: string;
    name: string;
  };
};

export function MessageHeader({ user }: MessageHeaderProps): JSX.Element {
  return (
    <Wrapper>
      <div>
        <Image src={user.image} alt={user.name} width={60} height={60} />
        <span>{user.name}</span>
      </div>
    </Wrapper>
  );
}
