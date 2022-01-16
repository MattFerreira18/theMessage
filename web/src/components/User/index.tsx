import Image from 'next/image';
import React from 'react';

import { useActiveUser } from '../../contexts/ActiveUserContext';
import { Wrapper, TextWrapper, InfoWrapper } from './styles';

type UserProps = {
  user: {
    name: string;
    last_message: {
      content: string;
      created_at: string;
    };
    unread_messages: number | null;
    image: string;
  };
};

export function User({ user }: UserProps): JSX.Element {
  const activeUser = useActiveUser();

  function handleUserMessage() {
    activeUser.setData({
      id: '123456',
      name: user.name,
      image: user.image,
    });
  }

  return (
    <Wrapper
      className={activeUser.data.name === user.name && 'active'}
      onClick={handleUserMessage}
    >
      <Image src={user.image} alt={user.name} width={60} height={60} />
      <div>
        <TextWrapper>
          <span>{user.name}</span>
          <p>{user.last_message.content}</p>
        </TextWrapper>
        <InfoWrapper>
          <span>10 min</span>
          <div className="message_counter">
            <span>{user.unread_messages}</span>
          </div>
        </InfoWrapper>
      </div>
    </Wrapper>
  );
}
