import { Props } from "./types";
import { CustomInput, IconWrapper, InputWrapper } from "./styled";

export const Input = ({ placeholder, value, onChange, name, icon }: Props) => {
  return (
    <InputWrapper htmlFor={name}>
      <CustomInput
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {icon && <IconWrapper>{icon}</IconWrapper>}
    </InputWrapper>
  );
};
