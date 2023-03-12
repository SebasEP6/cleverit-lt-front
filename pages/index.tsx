import { NextPage } from 'next';
import Head from 'next/head';

import { Button } from '@/components/Button';
import { Text, Title } from '@/components/Text';

import { useDrawer } from '@/context/drawer/drawer.provider'

const TestPage: NextPage = () => {
  const { openDrawer } = useDrawer();

  const handleOpenDrawer = () => {
    openDrawer({
      drawerComponent: (
        <>
          <Title content="Drawer! Hello..." />
          <Text content="Drawer content" />
        </>
      )
    });
  };

  return (
    <>
      <Head>
        <title>Sistema Gestión Bancaria - LT Postulación</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Button
          onClick={handleOpenDrawer}
        >
          Botón
        </Button>
      </main>
    </>
  )
}

export default TestPage;