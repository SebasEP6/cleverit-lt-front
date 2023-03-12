import 'rsuite/dist/rsuite.min.css';
import type { AppProps } from 'next/app'

import DrawerProvider from '../context/drawer/drawer.provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DrawerProvider>
      <Component {...pageProps} />
    </DrawerProvider>
  );
}
