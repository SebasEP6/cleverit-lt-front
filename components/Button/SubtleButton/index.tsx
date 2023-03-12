import React from "react";
import { Button, ButtonProps } from "rsuite";

interface IButtonProps extends ButtonProps {}

const DefaultButton: React.FC<IButtonProps> = (props) => {
  return (
    <Button
      {...props}
      appearance="subtle"
    />
  );
};

export default DefaultButton;