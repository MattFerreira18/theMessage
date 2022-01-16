import React from 'react';

import { ContactsList } from './ContactsList';
import { Header } from './Header';

import { Wrapper } from './styles';

type SidebarProps = {
  userId?: string;
}

export function Sidebar({ userId }: SidebarProps) {
  return (
    <Wrapper>
      <Header />
      <ContactsList userId={userId} />
    </Wrapper>
  );
}
