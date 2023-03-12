import React from "react";
import { Button, ButtonProps } from "rsuite";

import styles from '@/styles/components/Button/Default.module.sass';

const DefaultButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      className={styles.button}
      appearance="primary"
      color="cyan"
    />
  );
};

export default DefaultButton;