import {
  HeaderWrapper,
  Container,
  LoginButton,
  RegisterButton,
  RegisterButtons,
} from "./styled";
import Image from "next/image";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Image
          src="/svg/logo.svg"
          alt="iddaa Logo"
          width={108}
          height={34}
          priority
        />
        <RegisterButtons>
          <LoginButton>Giriş</LoginButton>
          <RegisterButton>Üye Ol</RegisterButton>
        </RegisterButtons>
      </Container>
    </HeaderWrapper>
  );
};
