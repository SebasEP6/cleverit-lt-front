import React from 'react';
import { Input, InputProps } from 'rsuite';

interface IDefaultInput extends InputProps {
  label: string;
}

const DefaultInput: React.FC<IDefaultInput> = ({
  label,
  id,
  ...defaultProps
}) => (
  <>
    <label>
      { label }
    </label>

    <Input
      {...defaultProps}
      size="md"
    />
  </>
);

export default DefaultInput;