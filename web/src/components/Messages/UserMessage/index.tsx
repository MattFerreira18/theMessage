import React from 'react';

import { Wrapper } from './styles';

type UserMessageProps = {
  content: string;
};

export function UserMessage({ content }: UserMessageProps): JSX.Element {
  return (
    <Wrapper>
      <div>
        <span>{content}</span>
      </div>
    </Wrapper>
  );
}
