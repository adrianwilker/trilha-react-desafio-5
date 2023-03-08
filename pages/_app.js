import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { SessionProvider } from 'next-auth/react';
import { HydrationProvider, Client } from "react-hydration-provider";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <HydrationProvider>
        <Client>
          <SessionProvider session={session}>
            <span className="theme-bejamas" />
            <Component {...pageProps} />
          </SessionProvider>
        </Client>
      </HydrationProvider>
    </>
  );
}

export default MyApp;
