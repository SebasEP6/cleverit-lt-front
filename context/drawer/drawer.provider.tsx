import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import { DrawerProps } from "rsuite";
import CustomDrawer from "../../components/Drawer";

import { DrawerContext, IOpenDrawer } from "./drawer.context";

interface IDrawerProvider {
  children: React.ReactNode;
}

const DrawerProvider: FC<IDrawerProvider> = (props) => {
  const { children } = props;

  const [drawer, setDrawer] = useState<JSX.Element | null>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [drawerProps, setDrawerProps] = useState<DrawerProps>();

  const [onOpen, setOnOpen] = useState<Function | null>();
  const [onClose, setOnClose] = useState<Function | null>();

  useEffect(() => {
    if (isOpen) {
      if (onOpen) onOpen();
    } else if (onClose) {
      onClose();

    }
  }, [isOpen, onClose, onOpen]);

  const closeDrawer = () => {
    setIsOpen(false);
    setOnOpen(null);


    setTimeout(() => {
      setDrawer(null);
      setOnClose(null);
    }, 500);
  };

  const setDrawerComponent = (newDrawerComponent: JSX.Element) => {
    setDrawer(newDrawerComponent);
  };

  const value = useMemo(
    () => ({
      openDrawer: (params: IOpenDrawer) => {
        const { drawerComponent, onOpenDrawer, onCloseDrawer, ...drawerProps } =
          params;

        setIsOpen(true);
        setDrawer(drawerComponent);

        if (drawerProps) setDrawerProps(drawerProps);
        if (onOpenDrawer) setOnOpen(() => onOpenDrawer);
        if (onCloseDrawer) setOnClose(() => onCloseDrawer);
      },

      closeDrawer,
      setDrawerComponent,
    }),
    [],
  );

  return (
    <DrawerContext.Provider {...{ value }}>
      <CustomDrawer {...{ ...drawerProps, isOpen }} onRequestClose={closeDrawer}>
        {drawer}
      </CustomDrawer>

      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);

export default DrawerProvider;
