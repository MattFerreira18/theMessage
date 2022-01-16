import React from 'react';

import { Wrapper } from './styles';

type ContactMessageProps = {
  content: string;
};

export function ContactMessage({ content }: ContactMessageProps): JSX.Element {
  return (
    <Wrapper>
      <div>
        <span>{content}</span>
      </div>
    </Wrapper>
  );
}
