import React, { createContext, useContext, useState } from 'react';

type UserType = {
  id: string;
  name: string;
  image: string;
};

type ActiveUserContextProps = {
  data: UserType;
  setData: React.Dispatch<React.SetStateAction<UserType>>;
};

type ActiveUserProviderProps = {
  children: React.ReactNode;
};

const ActiveUserContext = createContext<ActiveUserContextProps>(
  {} as ActiveUserContextProps,
);

export function ActiveUserProvider({ children }: ActiveUserProviderProps) {
  const [activeUserData, setActiveUserData] = useState({} as UserType);

  return (
    <ActiveUserContext.Provider
      value={{
        data: activeUserData,
        setData: setActiveUserData,
      }}
    >
      {children}
    </ActiveUserContext.Provider>
  );
}

export function useActiveUser() {
  const context = useContext(ActiveUserContext);

  return context;
}
