import React, { useEffect, useState } from 'react';

import { User } from '../../User';

import { Wrapper } from './styles';

type ContactProfile = {
  contact: {
    id: string;
    imageUrl: string;
    nickname: string;
  }
}

type ContactsListProps = {
  userId?: string;
}

export function ContactsList({ userId }: ContactsListProps) {
  const [contacts, contactsList] = useState<ContactProfile[]>([]);
  
  useEffect(() => {
    // console.log("🚀 ~ file: index.tsx ~ line 25 ~ ContactsList ~ data", data)
    // contactsList(data?.contacts);
  }, []);

  return (
    <Wrapper>
      {
        contacts && 
        contacts.map(contact => (
          <User
            user={{
              name: contact.contact.nickname,
              image: 'https://github.com/MattFerreira18.png',
              last_message: {
                content: 'Hello World! This an example message',
                created_at: new Date().toString(),
              },
              unread_messages: 10,
            }}
          />
        ))
      }
    </Wrapper>
  );
}
