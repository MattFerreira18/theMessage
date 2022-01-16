import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';

import { ActiveUserProvider } from "../contexts/ActiveUserContext";
import { GlobalStyle } from "../styles/global";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <GlobalStyle />
        <SessionProvider session={session}>
          <ActiveUserProvider>
            <Component {...pageProps} />
          </ActiveUserProvider>
        </SessionProvider>
    </>
  )
}
