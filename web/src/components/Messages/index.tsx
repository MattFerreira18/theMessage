import React from 'react';

import { useActiveUser } from '../../contexts/ActiveUserContext';
import { Logo } from '../Logo';
import { ContactMessage } from './ContactMessage';
import { MessageHeader } from './MessageHeader';
import { Wrapper, EmptyWrapper, Content } from './styles';
import { UserMessage } from './UserMessage';
import { WritingArea } from './WritingArea';

export function Messages() {
  const { data } = useActiveUser();

  if (!Object.keys(data).length) {
    return (
      <EmptyWrapper>
        <Logo />
        <p>select a contact to init the conversation.</p>
      </EmptyWrapper>
    );
  }

  return (
    <Wrapper>
      <MessageHeader user={data} />

      <Content>
        <ContactMessage content="Hello World" />
        <UserMessage content="Hello World" />
      </Content>

      <WritingArea />
    </Wrapper>
  );
}
