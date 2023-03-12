import React, { ReactNode } from 'react';

import styles from '@/styles/components/Container/Default.module.sass';

interface IMainContainer {
  children: ReactNode;
}

const MainContainer: React.FC<IMainContainer> = ({
  children
}) => (
  <div
    className={styles.container}
  >
    <div
      className={styles.body}
    >
      { children }
    </div>
  </div>
);

export default MainContainer;