import React from 'react';

import styles from '@/styles/components/Text/Title.module.sass';

interface ITitle {
  content: string
}

const Title: React.FC<ITitle> = ({
  content
}) => {
  return (
    <h2
      className={styles.text}
    >
      { content }
    </h2>
  );
};

export default Title;