// 画面の主要となるボタンのデザインを提供する役割

import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

// styled.buttonではなく()で囲む
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
