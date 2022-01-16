import React, { FormEvent, useState } from 'react';
import { BiSend } from 'react-icons/bi';

import { Wrapper } from './styles';

export function WritingArea() {
  const [message, setMessage] = useState('');

  function handleSendMessage(e: FormEvent) {
    e.preventDefault();

    console.log(message);
  }

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Write your message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={(e) => handleSendMessage(e)}>
        <BiSend />
      </button>
    </Wrapper>
  );
}
