import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Content, Wrapper, InputWrapper, ActionWrapper } from './styles';

type AddUserModalProps = {
  isOpen: boolean;
  onOpen: (state: boolean) => void;
  userId?: string;
};

export function AddUserModal({
  isOpen,
  onOpen,
  userId = '3ca0dde4-e45f-4627-9677-8816d0e7e702',
}: AddUserModalProps): JSX.Element | null {
  const [nickname, setNickname] = useState('');
  
  if (!isOpen) {
    return null;
  }
  
  const handleAddUser = () => {
    console.log(nickname, userId)
    if (!nickname) {
      return;
    }
    
    onOpen(false);
  }

  return (
    <Wrapper>
      <Content>
        <h2>Add User</h2>
        <hr />

        <ActionWrapper>
          <InputWrapper>
            <div>@</div>
            <input
              type="text"
              placeholder="add user"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputWrapper>

          <button onClick={handleAddUser} aria-label="add a new user">
            <AiOutlineUserAdd />
          </button>
        </ActionWrapper>
      </Content>
    </Wrapper>
  );
}
