import React from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { FlexContainer } from '@/components/Container';

export interface IFormInputs {
  value: string;
  onChange: (value: string) => void;
  label: string;
  id: string;
  placeholder: string;
  type: 'input' | 'password' | 'select';
  values?: string;
};

interface IForm {
  inputs: IFormInputs[];
  onSubmit: () => void;
}

const Form: React.FC<IForm> = ({
  inputs,
  onSubmit
}) => {
  const renderInputs = inputs.map(
    (input, key) => input.type !== 'select' ? (
      <Input
        {...input}
        key={`login_input_${key}`}
      />
    ) : ''
  );

  return (
    <FlexContainer>
      { renderInputs }

      <Button
        onClick={onSubmit}
      >
        Iniciar sesión
      </Button>
    </FlexContainer>
  );
};

export default Form;