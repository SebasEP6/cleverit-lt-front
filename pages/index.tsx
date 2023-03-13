import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';

import { LinkButton } from '@/components/Button';
import { Text, Title } from '@/components/Text';

import { useDrawer } from '@/context/drawer/drawer.provider';
import { FlexContainer, MainContainer } from '@/components/Container';
import Form, { IFormInputs } from '@/components/Form';
import { INewAccount, IUserLogin } from '@/interfaces/login';

const userInit: IUserLogin = {
  dni: '',
  password: ''
};

const accountInit: INewAccount = {
  user: {
    dni: '',
    name: ''
  },
  accountType: {
    id: '',
    name: ''
  }
};

const Login: NextPage = () => {
  const [user, setUser] = useState<IUserLogin>(userInit);
  const [newAccount, setNewAccount] = useState<INewAccount>(accountInit);

  const { openDrawer } = useDrawer();

  const loginInputs: IFormInputs[] = [
    {
      value: user.dni,
      onChange: val => setUser({ ...user, dni: val }),
      label: "DNI: ",
      id: "dni",
      placeholder: "123456",
      type: "input"
    },
    {
      value: user.password,
      onChange: val => setUser({ ...user, password: val }),
      label: "Contraseña: ",
      id: "password",
      placeholder: "",
      type: "password"
    }
  ];

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

  const handleLogin = () => {
    console.log("Logging in...");
  };

  return (
    <>
      <Head>
        <title>Sistema Gestión Bancaria - LT Postulación</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <FlexContainer>
          <Title
            content='Welcome, por favor inicia sesión:'
          />

          <Form
            inputs={loginInputs}
            onSubmit={handleLogin}
          />

          <Text
            content='Si no posees una cuenta puedes'
          />
          <LinkButton
            onClick={handleOpenDrawer}
          >
            crear una nueva cuenta aquí
          </LinkButton>
        </FlexContainer>
      </MainContainer>
    </>
  )
}

export default Login;