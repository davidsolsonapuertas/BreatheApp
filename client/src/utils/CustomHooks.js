import { useState } from 'react';

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (input, type) => {
    setValues({ ...values, [type]: input });
  };

  const onSubmit = () => {
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
