import React from "react";
import { Button, ButtonProps } from "rsuite";

const DefaultButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      appearance="link"
    />
  );
};

export default DefaultButton;