import React from "react";

import styles from '@/styles/components/Text/Text.module.sass';

interface IText {
  content: string;
}

const Text: React.FC<IText> = ({
  content
}) => {
  return (
    <span
      className={styles.text}
    >
      { content }
    </span>
  );
};

export default Text;