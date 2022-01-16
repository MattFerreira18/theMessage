import React, { useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Logo } from '../../Logo';
import { AddUserModal } from '../AddUserModal';

import { Wrapper } from './styles';

type HeaderProps = {
  userId?: string;
}

export function Header({ userId }: HeaderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <Logo />

        <div>
          <input type="text" placeholder="Search a user" />

          <button
            onClick={() => setModalIsOpen(true)}
            aria-label="open page to add a new user"
          >
            <AiOutlineUserAdd />
          </button>
        </div>
      </Wrapper>

      <AddUserModal userId={userId} isOpen={modalIsOpen} onOpen={setModalIsOpen} />
    </>
  );
}
