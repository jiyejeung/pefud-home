import { ReactNode } from 'react';

type PropsType = {
  condition: boolean;
  children: ReactNode;
};

const If = ({ condition, children }: PropsType) => {
  return condition ? children : <></>;
};

export default If;
